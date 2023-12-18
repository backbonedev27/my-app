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

/***/ "(app-pages-browser)/./src/app/components/ProjectSection.jsx":
/*!***********************************************!*\
  !*** ./src/app/components/ProjectSection.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectCard */ \"(app-pages-browser)/./src/app/components/ProjectCard.jsx\");\n/* harmony import */ var _ProjectTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectTag */ \"(app-pages-browser)/./src/app/components/ProjectTag.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst projectsData = [\n    {\n        id: 1,\n        title: \"Portfolio Website\",\n        description: \"Built a fully website using Next.js\",\n        imgurl: \"/images/portfolio/webporto.png\",\n        tags: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 2,\n        title: \"Multimedia Application\",\n        description: \"Created a media storage app using Laravel's full-stack framework. Securely store and manage media files with efficient data handling and a user-friendly interface, demonstrating Laravel proficiency for reliable, scalable media asset management.\",\n        imgurl: \"/images/portfolio/project2.jpg\",\n        tags: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 3,\n        title: \"Portfolio Website\",\n        description: \"Designed and implemented a personal portfolio website showcasing various projects and skills.\",\n        imgurl: \"/images/portfolio/project3.jpg\",\n        tags: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 4,\n        title: \"Task Management App\",\n        description: \"Created a task management application with features such as task creation, completion tracking, and user authentication.\",\n        imgurl: \"/images/portfolio/project4.jpg\",\n        tags: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    },\n    {\n        id: 5,\n        title: \"Social Media Dashboard\",\n        description: \"Developed a social medias dashboard with real-time updates and interactive data visualization.\",\n        imgurl: \"/images/portfolio/project5.jpg\",\n        tags: [\n            \"All\",\n            \"Web\"\n        ],\n        gitUrl: \"/\",\n        previewUrl: \"/\"\n    }\n];\nconst ProjectSection = ()=>{\n    _s();\n    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"All\");\n    const hanleTagChange = (newTag)=>{\n        setTag(newTag);\n    };\n    const filteredProjects = projectsData.filter((project)=>{\n        return project.tags.includes(tag);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-center text-4xl font-bold text-white mt-4 mb-12\",\n                children: \"My Projects\"\n            }, void 0, false, {\n                fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                lineNumber: 74,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white flex-row justify-center items-center gap-2 py-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: hanleTagChange,\n                        name: \"All\",\n                        isSelected: tag === \"All\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: hanleTagChange,\n                        name: \"Web\",\n                        isSelected: tag === \"Web\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectTag__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: hanleTagChange,\n                        name: \"Mobile\",\n                        isSelected: tag === \"Mobile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid md:grid-cols-3 gap-8 md:gap-12\",\n                children: filteredProjects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        title: project.title,\n                        description: project.description,\n                        imgurl: project.imgurl,\n                        gitUrl: project.gitUrl,\n                        previewUrl: project.previewUrl\n                    }, project.id, false, {\n                        fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\project\\\\portfolio\\\\Frontend\\\\nextjs\\\\my-app\\\\src\\\\app\\\\components\\\\ProjectSection.jsx\",\n                lineNumber: 91,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ProjectSection, \"yEXogHXw2iYAgbkZt/BgOh7nFTk=\");\n_c = ProjectSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectSection);\nvar _c;\n$RefreshReg$(_c, \"ProjectSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9Qcm9qZWN0U2VjdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDdUM7QUFDQTtBQUNGO0FBRXJDLE1BQU1JLGVBQWU7SUFDakI7UUFDSUMsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxNQUFNO1lBQUM7WUFBTztTQUFNO1FBQ3BCQyxRQUFRO1FBQ1JDLFlBQVk7SUFFaEI7SUFDQTtRQUNJTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLE1BQU07WUFBQztZQUFPO1NBQU07UUFDcEJDLFFBQVE7UUFDUkMsWUFBWTtJQUVoQjtJQUNBO1FBQ0lOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUFhO1FBQ2JDLFFBQVE7UUFDUkMsTUFBTTtZQUFDO1lBQU87U0FBTTtRQUNwQkMsUUFBUTtRQUNSQyxZQUFZO0lBRWhCO0lBQ0E7UUFDSU4sSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsUUFBUTtRQUNSQyxNQUFNO1lBQUM7WUFBTztTQUFNO1FBQ3BCQyxRQUFRO1FBQ1JDLFlBQVk7SUFFaEI7SUFDQTtRQUNJTixJQUFJO1FBQ0pDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxRQUFRO1FBQ1JDLE1BQU07WUFBQztZQUFPO1NBQU07UUFDcEJDLFFBQVE7UUFDUkMsWUFBWTtJQUVoQjtDQUVIO0FBRUQsTUFBTUMsaUJBQWlCOztJQUNuQixNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR2IsK0NBQVFBLENBQUM7SUFFL0IsTUFBTWMsaUJBQWlCLENBQUNDO1FBQ3BCRixPQUFPRTtJQUNYO0lBRUEsTUFBTUMsbUJBQW1CYixhQUFhYyxNQUFNLENBQUMsQ0FBQ0M7UUFDMUMsT0FBT0EsUUFBUVYsSUFBSSxDQUFDVyxRQUFRLENBQUNQO0lBQ2pDO0lBR0EscUJBQ0k7OzBCQUNJLDhEQUFDUTtnQkFBR0MsV0FBVTswQkFBdUQ7Ozs7OzswQkFHckUsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDWCw4REFBQ25CLG1EQUFVQTt3QkFDUHFCLFNBQVNUO3dCQUNUVSxNQUFLO3dCQUNMQyxZQUFZYixRQUFROzs7Ozs7a0NBQ3hCLDhEQUFDVixtREFBVUE7d0JBQ1BxQixTQUFTVDt3QkFDVFUsTUFBSzt3QkFDTEMsWUFBWWIsUUFBUTs7Ozs7O2tDQUN4Qiw4REFBQ1YsbURBQVVBO3dCQUNQcUIsU0FBU1Q7d0JBQ1RVLE1BQUs7d0JBQ0xDLFlBQVliLFFBQVE7Ozs7Ozs7Ozs7OzswQkFFNUIsOERBQUNVO2dCQUFJRCxXQUFVOzBCQUNWTCxpQkFBaUJVLEdBQUcsQ0FBQyxDQUFDUix3QkFDbkIsOERBQUNqQixvREFBV0E7d0JBRVJJLE9BQU9hLFFBQVFiLEtBQUs7d0JBQ3BCQyxhQUFhWSxRQUFRWixXQUFXO3dCQUNoQ0MsUUFBUVcsUUFBUVgsTUFBTTt3QkFDdEJFLFFBQVFTLFFBQVFULE1BQU07d0JBQ3RCQyxZQUFZUSxRQUFRUixVQUFVO3VCQUx6QlEsUUFBUWQsRUFBRTs7Ozs7Ozs7Ozs7O0FBWXZDO0dBOUNNTztLQUFBQTtBQWdETiwrREFBZUEsY0FBY0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvUHJvamVjdFNlY3Rpb24uanN4PzAxZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvamVjdENhcmQgZnJvbSAnLi9Qcm9qZWN0Q2FyZCdcclxuaW1wb3J0IFByb2plY3RUYWcgZnJvbSAnLi9Qcm9qZWN0VGFnJ1xyXG5cclxuY29uc3QgcHJvamVjdHNEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiBcIlBvcnRmb2xpbyBXZWJzaXRlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQnVpbHQgYSBmdWxseSB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIixcclxuICAgICAgICBpbWd1cmw6IFwiL2ltYWdlcy9wb3J0Zm9saW8vd2VicG9ydG8ucG5nXCIsXHJcbiAgICAgICAgdGFnczogW1wiQWxsXCIsIFwiV2ViXCJdLFxyXG4gICAgICAgIGdpdFVybDogXCIvXCIsXHJcbiAgICAgICAgcHJldmlld1VybDogXCIvXCIsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogXCJNdWx0aW1lZGlhIEFwcGxpY2F0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ3JlYXRlZCBhIG1lZGlhIHN0b3JhZ2UgYXBwIHVzaW5nIExhcmF2ZWwncyBmdWxsLXN0YWNrIGZyYW1ld29yay4gU2VjdXJlbHkgc3RvcmUgYW5kIG1hbmFnZSBtZWRpYSBmaWxlcyB3aXRoIGVmZmljaWVudCBkYXRhIGhhbmRsaW5nIGFuZCBhIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlLCBkZW1vbnN0cmF0aW5nIExhcmF2ZWwgcHJvZmljaWVuY3kgZm9yIHJlbGlhYmxlLCBzY2FsYWJsZSBtZWRpYSBhc3NldCBtYW5hZ2VtZW50LlwiLFxyXG4gICAgICAgIGltZ3VybDogXCIvaW1hZ2VzL3BvcnRmb2xpby9wcm9qZWN0Mi5qcGdcIixcclxuICAgICAgICB0YWdzOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICAgICAgZ2l0VXJsOiBcIi9cIixcclxuICAgICAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiBcIlBvcnRmb2xpbyBXZWJzaXRlXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRGVzaWduZWQgYW5kIGltcGxlbWVudGVkIGEgcGVyc29uYWwgcG9ydGZvbGlvIHdlYnNpdGUgc2hvd2Nhc2luZyB2YXJpb3VzIHByb2plY3RzIGFuZCBza2lsbHMuXCIsXHJcbiAgICAgICAgaW1ndXJsOiBcIi9pbWFnZXMvcG9ydGZvbGlvL3Byb2plY3QzLmpwZ1wiLFxyXG4gICAgICAgIHRhZ3M6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgICAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgICAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6IFwiVGFzayBNYW5hZ2VtZW50IEFwcFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNyZWF0ZWQgYSB0YXNrIG1hbmFnZW1lbnQgYXBwbGljYXRpb24gd2l0aCBmZWF0dXJlcyBzdWNoIGFzIHRhc2sgY3JlYXRpb24sIGNvbXBsZXRpb24gdHJhY2tpbmcsIGFuZCB1c2VyIGF1dGhlbnRpY2F0aW9uLlwiLFxyXG4gICAgICAgIGltZ3VybDogXCIvaW1hZ2VzL3BvcnRmb2xpby9wcm9qZWN0NC5qcGdcIixcclxuICAgICAgICB0YWdzOiBbXCJBbGxcIiwgXCJXZWJcIl0sXHJcbiAgICAgICAgZ2l0VXJsOiBcIi9cIixcclxuICAgICAgICBwcmV2aWV3VXJsOiBcIi9cIixcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIHRpdGxlOiBcIlNvY2lhbCBNZWRpYSBEYXNoYm9hcmRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJEZXZlbG9wZWQgYSBzb2NpYWwgbWVkaWFzIGRhc2hib2FyZCB3aXRoIHJlYWwtdGltZSB1cGRhdGVzIGFuZCBpbnRlcmFjdGl2ZSBkYXRhIHZpc3VhbGl6YXRpb24uXCIsXHJcbiAgICAgICAgaW1ndXJsOiBcIi9pbWFnZXMvcG9ydGZvbGlvL3Byb2plY3Q1LmpwZ1wiLFxyXG4gICAgICAgIHRhZ3M6IFtcIkFsbFwiLCBcIldlYlwiXSxcclxuICAgICAgICBnaXRVcmw6IFwiL1wiLFxyXG4gICAgICAgIHByZXZpZXdVcmw6IFwiL1wiLFxyXG5cclxuICAgIH0sXHJcblxyXG5dXHJcblxyXG5jb25zdCBQcm9qZWN0U2VjdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt0YWcsIHNldFRhZ10gPSB1c2VTdGF0ZShcIkFsbFwiKVxyXG5cclxuICAgIGNvbnN0IGhhbmxlVGFnQ2hhbmdlID0gKG5ld1RhZykgPT4ge1xyXG4gICAgICAgIHNldFRhZyhuZXdUYWcpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZmlsdGVyZWRQcm9qZWN0cyA9IHByb2plY3RzRGF0YS5maWx0ZXIoKHByb2plY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdC50YWdzLmluY2x1ZGVzKHRhZylcclxuICAgIH0pXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbXQtNCBtYi0xMic+XHJcbiAgICAgICAgICAgICAgICBNeSBQcm9qZWN0c1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTIgcHktNic+XHJcbiAgICAgICAgICAgICAgICA8UHJvamVjdFRhZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmxlVGFnQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJBbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3RhZyA9PT0gXCJBbGxcIn0gLz5cclxuICAgICAgICAgICAgICAgIDxQcm9qZWN0VGFnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFubGVUYWdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIldlYlwiXHJcbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17dGFnID09PSBcIldlYlwifSAvPlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RUYWdcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5sZVRhZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiTW9iaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICBpc1NlbGVjdGVkPXt0YWcgPT09IFwiTW9iaWxlXCJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBtZDpncmlkLWNvbHMtMyBnYXAtOCBtZDpnYXAtMTInPlxyXG4gICAgICAgICAgICAgICAge2ZpbHRlcmVkUHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2plY3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9qZWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWd1cmw9e3Byb2plY3QuaW1ndXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaXRVcmw9e3Byb2plY3QuZ2l0VXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aWV3VXJsPXtwcm9qZWN0LnByZXZpZXdVcmx9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RTZWN0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJQcm9qZWN0Q2FyZCIsIlByb2plY3RUYWciLCJwcm9qZWN0c0RhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWd1cmwiLCJ0YWdzIiwiZ2l0VXJsIiwicHJldmlld1VybCIsIlByb2plY3RTZWN0aW9uIiwidGFnIiwic2V0VGFnIiwiaGFubGVUYWdDaGFuZ2UiLCJuZXdUYWciLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyIiwicHJvamVjdCIsImluY2x1ZGVzIiwiaDIiLCJjbGFzc05hbWUiLCJkaXYiLCJvbkNsaWNrIiwibmFtZSIsImlzU2VsZWN0ZWQiLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/ProjectSection.jsx\n"));

/***/ })

});