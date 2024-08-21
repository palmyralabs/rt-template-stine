import { jsx as v } from "react/jsx-runtime";
import * as i from "react";
import { useRef as L } from "react";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { F as I } from "../../../chunks/NoopConverter.js";
import { SummaryGridControls as M } from "./SummaryGridControls.js";
import "dayjs";
/**
 * @remix-run/router v1.19.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function N() {
  return N = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, N.apply(this, arguments);
}
var R;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(R || (R = {}));
function o(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function O(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function w(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (t.hash = e.substr(n), e = e.substr(0, n));
    let a = e.indexOf("?");
    a >= 0 && (t.search = e.substr(a), e = e.substr(0, a)), e && (t.pathname = e);
  }
  return t;
}
var b;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(b || (b = {}));
function W(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: a = "",
    hash: r = ""
  } = typeof e == "string" ? w(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : z(n, t) : t,
    search: J(a),
    hash: K(r)
  };
}
function z(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((r) => {
    r === ".." ? n.length > 1 && n.pop() : r !== "." && n.push(r);
  }), n.length > 1 ? n.join("/") : "/";
}
function g(e, t, n, a) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(a) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function B(e) {
  return e.filter((t, n) => n === 0 || t.route.path && t.route.path.length > 0);
}
function A(e, t) {
  let n = B(e);
  return t ? n.map((a, r) => r === n.length - 1 ? a.pathname : a.pathnameBase) : n.map((a) => a.pathnameBase);
}
function q(e, t, n, a) {
  a === void 0 && (a = !1);
  let r;
  typeof e == "string" ? r = w(e) : (r = N({}, e), o(!r.pathname || !r.pathname.includes("?"), g("?", "pathname", "search", r)), o(!r.pathname || !r.pathname.includes("#"), g("#", "pathname", "hash", r)), o(!r.search || !r.search.includes("#"), g("#", "search", "hash", r)));
  let s = e === "" || r.pathname === "", u = s ? "/" : r.pathname, c;
  if (u == null)
    c = n;
  else {
    let f = t.length - 1;
    if (!a && u.startsWith("..")) {
      let m = u.split("/");
      for (; m[0] === ".."; )
        m.shift(), f -= 1;
      r.pathname = m.join("/");
    }
    c = f >= 0 ? t[f] : "/";
  }
  let d = W(r, c), p = u && u !== "/" && u.endsWith("/"), l = (s || u === ".") && n.endsWith("/");
  return !d.pathname.endsWith("/") && (p || l) && (d.pathname += "/"), d;
}
const G = (e) => e.join("/").replace(/\/\/+/g, "/"), J = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, K = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, S = ["post", "put", "patch", "delete"];
new Set(S);
const T = ["get", ...S];
new Set(T);
/**
 * React Router v6.26.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function E() {
  return E = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, E.apply(this, arguments);
}
const x = /* @__PURE__ */ i.createContext(null);
process.env.NODE_ENV !== "production" && (x.displayName = "DataRouter");
const $ = /* @__PURE__ */ i.createContext(null);
process.env.NODE_ENV !== "production" && ($.displayName = "DataRouterState");
const F = /* @__PURE__ */ i.createContext(null);
process.env.NODE_ENV !== "production" && (F.displayName = "Await");
const y = /* @__PURE__ */ i.createContext(null);
process.env.NODE_ENV !== "production" && (y.displayName = "Navigation");
const C = /* @__PURE__ */ i.createContext(null);
process.env.NODE_ENV !== "production" && (C.displayName = "Location");
const h = /* @__PURE__ */ i.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (h.displayName = "Route");
const Y = /* @__PURE__ */ i.createContext(null);
process.env.NODE_ENV !== "production" && (Y.displayName = "RouteError");
function D() {
  return i.useContext(C) != null;
}
function Q() {
  return D() || (process.env.NODE_ENV !== "production" ? o(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : o(!1)), i.useContext(C).location;
}
const P = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function U(e) {
  i.useContext(y).static || i.useLayoutEffect(e);
}
function X() {
  let {
    isDataRoute: e
  } = i.useContext(h);
  return e ? te() : Z();
}
function Z() {
  D() || (process.env.NODE_ENV !== "production" ? o(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : o(!1));
  let e = i.useContext(x), {
    basename: t,
    future: n,
    navigator: a
  } = i.useContext(y), {
    matches: r
  } = i.useContext(h), {
    pathname: s
  } = Q(), u = JSON.stringify(A(r, n.v7_relativeSplatPath)), c = i.useRef(!1);
  return U(() => {
    c.current = !0;
  }), i.useCallback(function(p, l) {
    if (l === void 0 && (l = {}), process.env.NODE_ENV !== "production" && O(c.current, P), !c.current) return;
    if (typeof p == "number") {
      a.go(p);
      return;
    }
    let f = q(p, JSON.parse(u), s, l.relative === "path");
    e == null && t !== "/" && (f.pathname = f.pathname === "/" ? t : G([t, f.pathname])), (l.replace ? a.replace : a.push)(f, l.state, l);
  }, [t, a, u, s, e]);
}
var _ = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(_ || {}), V = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(V || {});
function j(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function k(e) {
  let t = i.useContext(x);
  return t || (process.env.NODE_ENV !== "production" ? o(!1, j(e)) : o(!1)), t;
}
function H(e) {
  let t = i.useContext(h);
  return t || (process.env.NODE_ENV !== "production" ? o(!1, j(e)) : o(!1)), t;
}
function ee(e) {
  let t = H(e), n = t.matches[t.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? o(!1, e + ' can only be used on routes that contain a unique "id"') : o(!1)), n.route.id;
}
function te() {
  let {
    router: e
  } = k(_.UseNavigateStable), t = ee(V.UseNavigateStable), n = i.useRef(!1);
  return U(() => {
    n.current = !0;
  }), i.useCallback(function(r, s) {
    s === void 0 && (s = {}), process.env.NODE_ENV !== "production" && O(n.current, P), n.current && (typeof r == "number" ? e.navigate(r) : e.navigate(r, E({
      fromRouteId: t
    }, s)));
  }, [e, t]);
}
new Promise(() => {
});
const ne = function(e, t) {
  return t ? typeof e == "string" && t instanceof Array ? e.replace(/({\d})/g, function(n) {
    let a = n.replace(/{/, "").replace(/}/, "");
    return t[a];
  }) : typeof e == "string" && t instanceof Object ? Object.keys(t).length === 0 ? e : e.replace(/({([^}]+)})/g, function(n) {
    let a = n.replace(/{/, "").replace(/}/, "");
    return t[a] ? t[a] : n;
  }) : e : e;
};
function fe(e) {
  const t = X(), n = e.idKey || "id", a = e.gridRef || L(null), r = (u) => {
    const c = { id: u[n] }, d = e.grid || "view";
    t(ne(d + "/{id}", c));
  }, s = () => {
    t("new");
  };
  return /* @__PURE__ */ v("div", { className: "grid-renderer-container", children: /* @__PURE__ */ v("div", { className: "palmyra-grid-container summary-grid", children: /* @__PURE__ */ v(
    I,
    {
      title: e.title,
      columns: e.columns,
      DataGridControls: M,
      DataGridControlProps: { newRecord: s },
      onRowClick: r,
      pageSize: e.pageSize,
      ...e.options,
      ref: a,
      customizer: e.customizer,
      quickSearch: e.quickSearch
    }
  ) }) });
}
export {
  fe as SummaryGrid
};
