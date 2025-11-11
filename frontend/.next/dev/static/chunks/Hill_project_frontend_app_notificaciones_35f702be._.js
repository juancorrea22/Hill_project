(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Hill_project/frontend/app/notificaciones/Notificaciones.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "content": "Notificaciones-module__IYMh9q__content",
  "error": "Notificaciones-module__IYMh9q__error",
  "mensajesSection": "Notificaciones-module__IYMh9q__mensajesSection",
  "navButton": "Notificaciones-module__IYMh9q__navButton",
  "navIcon": "Notificaciones-module__IYMh9q__navIcon",
  "navLabel": "Notificaciones-module__IYMh9q__navLabel",
  "navigation": "Notificaciones-module__IYMh9q__navigation",
  "notificacion": "Notificaciones-module__IYMh9q__notificacion",
  "notificacionFecha": "Notificaciones-module__IYMh9q__notificacionFecha",
  "notificacionTexto": "Notificaciones-module__IYMh9q__notificacionTexto",
  "pageContainer": "Notificaciones-module__IYMh9q__pageContainer",
  "tareas": "Notificaciones-module__IYMh9q__tareas",
  "tareasTitulo": "Notificaciones-module__IYMh9q__tareasTitulo",
  "titleContainer": "Notificaciones-module__IYMh9q__titleContainer",
});
}),
"[project]/Hill_project/frontend/app/notificaciones/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NotificacionesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Hill_project/frontend/app/notificaciones/Notificaciones.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function NotificacionesPage() {
    _s();
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tasks, setTasks] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificacionesPage.useEffect": ()=>{
            const API = __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:4000';
            async function loadData() {
                setLoading(true);
                setErr(null);
                try {
                    const [nRes, tRes] = await Promise.allSettled([
                        fetch(`${API}/notifications`),
                        fetch(`${API}/tasks/pending`)
                    ]);
                    if (nRes.status === 'fulfilled' && nRes.value.ok) {
                        const data = await nRes.value.json();
                        setNotifications(Array.isArray(data) ? data : []);
                    } else {
                        setNotifications([
                            {
                                id: 'n1',
                                title: 'Mensaje de notificación 1',
                                time: '6:55 a.m',
                                date: '05/08/2025'
                            },
                            {
                                id: 'n2',
                                title: 'Mensaje de notificación 2',
                                time: '7:04 p.m',
                                date: '04/08/2025'
                            },
                            {
                                id: 'n3',
                                title: 'Mensaje de notificación 3',
                                time: '8:30 a.m',
                                date: '04/08/2025'
                            }
                        ]);
                    }
                    if (tRes.status === 'fulfilled' && tRes.value.ok) {
                        const data = await tRes.value.json();
                        setTasks(Array.isArray(data) ? data : []);
                    } else {
                        setTasks([
                            {
                                id: 't1',
                                title: 'Tarea 4: Descripcion de la tarea'
                            },
                            {
                                id: 't2',
                                title: 'Tarea 5: Descripcion de la tarea'
                            },
                            {
                                id: 't3',
                                title: 'Tarea 6: Descripcion de la tarea'
                            }
                        ]);
                    }
                } catch (error) {
                    console.error(error);
                    setErr('No fue posible cargar las notificaciones');
                } finally{
                    setLoading(false);
                }
            }
            loadData();
        }
    }["NotificacionesPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pageContainer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/notificaciones",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Icono_campana_hill.png",
                                    width: 60,
                                    height: 60,
                                    alt: "Campana"
                                }, void 0, false, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 76,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLabel,
                                children: "Campana"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/progreso",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/icono_progreso.png",
                                    width: 60,
                                    height: 60,
                                    alt: "Progreso"
                                }, void 0, false, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLabel,
                                children: "Progreso"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/home",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Hill_imagen_logo.jpg",
                                    width: 60,
                                    height: 60,
                                    alt: "Hill"
                                }, void 0, false, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLabel,
                                children: "Hill"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/logros",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Icono_logro.png",
                                    width: 60,
                                    height: 60,
                                    alt: "Logros"
                                }, void 0, false, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 91,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLabel,
                                children: "Logros"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/opciones",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navButton,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navIcon,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/icono_opciones.png",
                                    width: 60,
                                    height: 60,
                                    alt: "Opciones"
                                }, void 0, false, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 96,
                                    columnNumber: 43
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navLabel,
                                children: "Opciones"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].titleContainer,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: "Notificaciones"
                }, void 0, false, {
                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].mensajesSection,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "Mensajes de Notificación"
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "cargando notificaciones..."
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 109,
                                columnNumber: 23
                            }, this),
                            err && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].error,
                                children: err
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 110,
                                columnNumber: 19
                            }, this),
                            notifications && notifications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No hay notificaciones."
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 112,
                                columnNumber: 59
                            }, this),
                            notifications?.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificacion,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/Icono_campana_hill.png",
                                            width: 60,
                                            height: 60,
                                            alt: "Notificación"
                                        }, void 0, false, {
                                            fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificacionTexto,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                    children: n.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 20
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].notificacionFecha,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: n.time ?? ''
                                                }, void 0, false, {
                                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: n.date ?? ''
                                                }, void 0, false, {
                                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                                    lineNumber: 122,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                            lineNumber: 120,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, n.id, true, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tareas,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$app$2f$notificaciones$2f$Notificaciones$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tareasTitulo,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: "Aún no has completado las siguientes tareas:"
                                }, void 0, false, {
                                    fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 46
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            tasks && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: tasks.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/icono_x_roja.png",
                                                width: 60,
                                                height: 60,
                                                alt: "X"
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Hill_project$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t.title
                                            }, void 0, false, {
                                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                        lineNumber: 134,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Hill_project/frontend/app/notificaciones/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
_s(NotificacionesPage, "SDvY0DkpHmQvaoqlbybMsSZ4CN0=");
_c = NotificacionesPage;
var _c;
__turbopack_context__.k.register(_c, "NotificacionesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Hill_project_frontend_app_notificaciones_35f702be._.js.map