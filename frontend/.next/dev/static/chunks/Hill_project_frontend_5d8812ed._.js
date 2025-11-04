(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Hill_project/frontend/src/styles/pages.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "hill-login__links": "pages-module__C7w0fq__hill-login__links",
  "hill_avatar": "pages-module__C7w0fq__hill_avatar",
  "hill_banner": "pages-module__C7w0fq__hill_banner",
  "hill_btn--full-width": "pages-module__C7w0fq__hill_btn--full-width",
  "hill_chart": "pages-module__C7w0fq__hill_chart",
  "hill_form_error_message": "pages-module__C7w0fq__hill_form_error_message",
  "hill_icon": "pages-module__C7w0fq__hill_icon",
  "hill_image": "pages-module__C7w0fq__hill_image",
  "hill_image--contain": "pages-module__C7w0fq__hill_image--contain",
  "hill_image_placeholder": "pages-module__C7w0fq__hill_image_placeholder",
  "hill_login__form_container": "pages-module__C7w0fq__hill_login__form_container",
  "hill_login__image": "pages-module__C7w0fq__hill_login__image",
  "hill_login__link": "pages-module__C7w0fq__hill_login__link",
  "hill_login__links": "pages-module__C7w0fq__hill_login__links",
  "hill_login__logo": "pages-module__C7w0fq__hill_login__logo",
  "hill_login__title": "pages-module__C7w0fq__hill_login__title",
  "hill_login_container": "pages-module__C7w0fq__hill_login_container",
  "hill_login_page": "pages-module__C7w0fq__hill_login_page",
  "hill_logo": "pages-module__C7w0fq__hill_logo",
  "hill_logo_placeholder": "pages-module__C7w0fq__hill_logo_placeholder",
});
}),
"[project]/Hill_project/frontend/app/login/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/src/styles/pages.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function LoginPage() {
    _s();
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        const API = __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE ?? 'http://localhost:4000';
        try {
            const response = await fetch(`${API}/api/auth/login/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: username,
                    password
                })
            });
            if (response.ok) {
                const data = await response.json();
                if (data.token) localStorage.setItem('token', data.token);
                if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
                router.push('/home');
            } else {
                setError(true);
            }
        } catch (err) {
            console.error('Error en el login:', err);
            setError(true);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login_container} ${__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login_page}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login__image,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/login-image.jpg",
                    alt: "habitos saludables",
                    width: 626,
                    height: 626,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_image
                }, void 0, false, {
                    fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login__form_container,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login__logo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/Hill_imagen_logo.jpg",
                            width: 60,
                            height: 64,
                            alt: "logo hill",
                            className: "hill-logo"
                        }, void 0, false, {
                            fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login__form,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_login__title,
                                children: "Iniciar Sesión"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_form,
                                onSubmit: handleSubmit,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$src$2f$styles$2f$pages$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hill_form_group,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "username",
                                                className: "hill-form-label",
                                                children: "Nombre de usuario"
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                                lineNumber: 56,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                id: "username",
                                                value: username,
                                                onChange: (e)=>setUsername(e.target.value),
                                                className: "hill-form-input",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                                lineNumber: 57,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hill-form-group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "password",
                                                className: "hill-form-label",
                                                children: "Contraseña"
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "password",
                                                id: "password",
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value),
                                                className: "hill-form-input",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                                lineNumber: 62,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hill-form-error",
                                        children: "Nombre de usuario o contraseña incorrectos"
                                    }, void 0, false, {
                                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "hill-btn hill-btn--primary hill-btn--full-width",
                                        children: "Iniciar Sesión"
                                    }, void 0, false, {
                                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hill-login__links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/forgot-password",
                                        className: "hill-login__link",
                                        children: "¿Olvidaste tu contraseña?"
                                    }, void 0, false, {
                                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/signIn",
                                        className: "hill-login__link",
                                        children: "Registrarse"
                                    }, void 0, false, {
                                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Hill_project/frontend/app/login/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(LoginPage, "T8E4pseZqOyv9pFGZE3V6LbMmYw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Hill_project_frontend_5d8812ed._.js.map