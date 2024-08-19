import { jsx as l, jsxs as D, Fragment as S } from "react/jsx-runtime";
import { useState as L, useEffect as q, useRef as M, forwardRef as F, useImperativeHandle as ne, useMemo as oe } from "react";
import { n as T, E as W, u as ae, D as ie, o as le, _ as se } from "./ExportDataButton.js";
import { useServerQuery as ce } from "@palmyralabs/rt-forms";
import { createColumnHelper as ue, getCoreRowModel as pe, useReactTable as de, flexRender as G } from "@tanstack/react-table";
import k from "dayjs";
import { TableCell as A, CircularProgress as fe, Table as he, TableHead as be, TableRow as Y, TableBody as me, TableFooter as ge, FormControl as ye, Select as ve, MenuItem as we, Pagination as Oe, styled as Pe, Tooltip as xe, tooltipClasses as B } from "@mui/material";
import '../assets/NoopConverter.css';var Se = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var z = { exports: {} };
z.exports;
(function(e, t) {
  (function(r, o) {
    var s = {};
    r.PubSub ? (s = r.PubSub, console.warn("PubSub already loaded, using existing version")) : (r.PubSub = s, o(s)), e !== void 0 && e.exports && (t = e.exports = s), t.PubSub = s, e.exports = t = s;
  })(typeof window == "object" && window || Se, function(r) {
    var o = {}, s = -1, u = "*";
    function h(n) {
      var a;
      for (a in n)
        if (Object.prototype.hasOwnProperty.call(n, a))
          return !0;
      return !1;
    }
    function f(n) {
      return function() {
        throw n;
      };
    }
    function v(n, a, i) {
      try {
        n(a, i);
      } catch (c) {
        setTimeout(f(c), 0);
      }
    }
    function b(n, a, i) {
      n(a, i);
    }
    function d(n, a, i, c) {
      var p = o[a], O = c ? b : v, P;
      if (Object.prototype.hasOwnProperty.call(o, a))
        for (P in p)
          Object.prototype.hasOwnProperty.call(p, P) && O(p[P], n, i);
    }
    function w(n, a, i) {
      return function() {
        var c = String(n), p = c.lastIndexOf(".");
        for (d(n, n, a, i); p !== -1; )
          c = c.substr(0, p), p = c.lastIndexOf("."), d(n, c, a, i);
        d(n, u, a, i);
      };
    }
    function m(n) {
      var a = String(n), i = !!(Object.prototype.hasOwnProperty.call(o, a) && h(o[a]));
      return i;
    }
    function y(n) {
      for (var a = String(n), i = m(a) || m(u), c = a.lastIndexOf("."); !i && c !== -1; )
        a = a.substr(0, c), c = a.lastIndexOf("."), i = m(a);
      return i;
    }
    function g(n, a, i, c) {
      n = typeof n == "symbol" ? n.toString() : n;
      var p = w(n, a, c), O = y(n);
      return O ? (i === !0 ? p() : setTimeout(p, 0), !0) : !1;
    }
    r.publish = function(n, a) {
      return g(n, a, !1, r.immediateExceptions);
    }, r.publishSync = function(n, a) {
      return g(n, a, !0, r.immediateExceptions);
    }, r.subscribe = function(n, a) {
      if (typeof a != "function")
        return !1;
      n = typeof n == "symbol" ? n.toString() : n, Object.prototype.hasOwnProperty.call(o, n) || (o[n] = {});
      var i = "uid_" + String(++s);
      return o[n][i] = a, i;
    }, r.subscribeAll = function(n) {
      return r.subscribe(u, n);
    }, r.subscribeOnce = function(n, a) {
      var i = r.subscribe(n, function() {
        r.unsubscribe(i), a.apply(this, arguments);
      });
      return r;
    }, r.clearAllSubscriptions = function() {
      o = {};
    }, r.clearSubscriptions = function(n) {
      var a;
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && delete o[a];
    }, r.countSubscriptions = function(n) {
      var a, i, c = 0;
      for (a in o)
        if (Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0) {
          for (i in o[a])
            c++;
          break;
        }
      return c;
    }, r.getSubscriptions = function(n) {
      var a, i = [];
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && i.push(a);
      return i;
    }, r.unsubscribe = function(n) {
      var a = function(I) {
        var $;
        for ($ in o)
          if (Object.prototype.hasOwnProperty.call(o, $) && $.indexOf(I) === 0)
            return !0;
        return !1;
      }, i = typeof n == "string" && (Object.prototype.hasOwnProperty.call(o, n) || a(n)), c = !i && typeof n == "string", p = typeof n == "function", O = !1, P, x, C;
      if (i) {
        r.clearSubscriptions(n);
        return;
      }
      for (P in o)
        if (Object.prototype.hasOwnProperty.call(o, P)) {
          if (x = o[P], c && x[n]) {
            delete x[n], O = n;
            break;
          }
          if (p)
            for (C in x)
              Object.prototype.hasOwnProperty.call(x, C) && x[C] === n && (delete x[C], O = !0);
        }
      return O;
    };
  });
})(z, z.exports);
var Ce = z.exports;
const R = /* @__PURE__ */ De(Ce);
var $e = Object.defineProperty, je = (e, t, r) => t in e ? $e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Q = (e, t, r) => je(e, typeof t != "symbol" ? t + "" : t, r);
class Ne {
  constructor() {
    Q(this, "format", (t) => t), Q(this, "parse", (t) => t);
  }
}
new Ne();
const ke = (e, t) => {
  switch (e.type || "string") {
    case "date":
      return Re(t);
    case "radio":
    case "select":
    case "checkbox":
    case "iosswitch":
      return J(t, e);
    case "switch":
      return J(t, e);
    case "datetime":
      return Te(t);
    case "serverlookup":
      return Ie(t);
    case "textarea":
      return _e(t);
    case "password":
      return Fe(t);
    case "numbersOnly":
      return Ae(t);
    case "integer":
      return ze(t);
    case "autoComplete":
      return Ee(t);
    default:
      return Me(t);
  }
}, Re = (e, t) => e, Te = (e, t) => e, Me = (e, t) => e instanceof Object ? JSON.stringify(e) : e, _e = (e, t) => e, Ae = (e, t) => e, ze = (e, t) => e, Ee = (e, t) => e, Fe = (e, t) => e, J = (e, t) => {
  var r = t.options;
  return r[e];
}, Ie = (e, t) => e, Ge = (e) => (t) => ke(e, t.getValue());
var Ye = Object.defineProperty, He = (e, t, r) => t in e ? Ye(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, H = (e, t, r) => He(e, typeof t != "symbol" ? t + "" : t, r);
let K = class {
  constructor(t, r) {
    H(this, "serverPattern"), H(this, "displayPattern"), H(this, "getDefaultValue", (o) => o || ""), this.serverPattern = t.serverPattern || t.displayPattern || r, this.displayPattern = t.displayPattern;
  }
  format(t) {
    return t && k(t).format(this.serverPattern);
  }
  parse(t) {
    if (t) {
      if (t instanceof Date)
        return t;
      const r = Number(t);
      return !isNaN(r) && r.toString() === t.toString() ? new Date(r) : k(t, this.serverPattern).toDate();
    }
    return t;
  }
  convert(t) {
    const r = this.parse(t);
    return r && r instanceof Date && this.displayPattern ? k(r).format(this.displayPattern) : t;
  }
};
var Ve = Object.defineProperty, Le = (e, t, r) => t in e ? Ve(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, _ = (e, t, r) => Le(e, typeof t != "symbol" ? t + "" : t, r);
function V(e) {
  return e ? k(e).isValid() : !1;
}
let qe = class {
  constructor(t, r) {
    _(this, "serverPattern"), _(this, "getFieldData", (o, s) => T(s.attribute, o)), _(this, "getRawdata", (o, s) => T(s.attribute, o)), _(this, "getDefaultValue", (o) => o || ""), this.serverPattern = t.serverPattern || t.displayPattern || r;
  }
  format(t) {
    if (t)
      return V(t.from) ? V(t.to) ? this._formatDate(t.from) + "..." + this._formatDate(t.to) : ">" + this._formatDate(t.from) : V(t.to) ? "<" + this._formatDate(t.to) : void 0;
  }
  _formatDate(t) {
    return k(t).format(this.serverPattern);
  }
  parse(t) {
    var r, o;
    if (t && typeof t == "string") {
      const s = t.charAt(0);
      if (s == ">")
        r = this._parseDate(t.slice(1));
      else if (s == "<")
        o = this._parseDate(t.slice(1));
      else {
        const u = t.split("...");
        r = this._parseDate(u[0]), u[1] && (o = this._parseDate(u[1]));
      }
    }
    return { from: r, to: o };
  }
  _parseDate(t) {
    if (t)
      return k(t, this.serverPattern).toDate();
  }
  convert(t) {
    return t;
  }
};
var We = Object.defineProperty, Be = (e, t, r) => t in e ? We(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, N = (e, t, r) => Be(e, typeof t != "symbol" ? t + "" : t, r);
let Qe = class {
  constructor() {
    N(this, "getFieldData", (t, r) => T(r.attribute, t)), N(this, "getRawdata", (t, r) => T(r.attribute, t)), N(this, "format", (t) => t), N(this, "parse", (t) => t), N(this, "convert", (t) => t), N(this, "getDefaultValue", (t) => t || "");
  }
};
const Je = new Qe(), Ke = (e, t) => {
  switch (e.type) {
    case "date":
      return new K(e, "YYYY-MM-DD");
    case "datetime":
      return new K(e, "YYYY-MM-DDTHH:mm:ss");
    case "dateRange":
      return new qe(e, "YYYY-MM-DD");
    case "sliderRange":
      return new SliderRangeConverter(e);
    default:
      return Je;
  }
}, ee = {
  formatCell: function(e, t) {
    return t;
  },
  formatHeader: function(e, t) {
    return t;
  },
  formatFooter: function(e, t) {
    return t;
  }
}, Ue = (e, t) => {
  var r = e.indexOf(t);
  return r >= 0;
}, Xe = (e) => Ue(e, "."), U = ue();
function Ze(e, t) {
  const r = t || ee;
  return e.every((o) => o.columnGroup == null) ? e.map((o) => te(o, r)) : et(e, r);
}
function et(e, t) {
  const r = new Array();
  var o = void 0;
  return e.map((s) => {
    const u = te(s, t);
    s.columnGroup ? ((!o || o.header != s.columnGroup) && (o = {}, o.header = s.columnGroup, o.columns = [], r.push(o)), o.columns.push(u)) : r.push(u);
  }), r;
}
function te(e, t) {
  const r = e.sortable, o = e.searchable;
  var s = e.cellRenderer;
  const u = t.formatHeader(e, rt(e)), h = t.formatFooter(e, nt());
  if (s)
    return U.display({
      id: X(e),
      meta: {
        attribute: e.attribute,
        columnDef: e
      },
      enableSorting: r,
      enableColumnFilter: o,
      header: u,
      footer: h,
      cell: s
    });
  let f = t.formatCell(e, Ge(e));
  return U.accessor(tt(e), {
    id: X(e),
    meta: {
      attribute: e.attribute,
      columnDef: e
    },
    enableSorting: r,
    enableColumnFilter: o,
    header: u,
    footer: h,
    cell: f
  });
}
function tt(e) {
  var t = e.attribute ? e.attribute : e.name;
  const r = Ke(e);
  return Xe(t) ? (o) => r.convert(T(t, o)) : (o) => r.convert(o[t]);
}
function X(e) {
  return e.name ? e.name : e.attribute;
}
function rt(e) {
  return () => /* @__PURE__ */ l("span", { children: e.label });
}
function nt(e) {
  return (t, r) => {
  };
}
const re = () => /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("div", { className: "empty-child-table-container", children: "No Data Available" }) });
function ot(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(e);
}
function at(e) {
  return W({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(e);
}
const it = ({ header: e, children: t, onSortChange: r }) => {
  var o, s, u, h;
  const [f, v] = L(""), b = ((o = e.column.columnDef.meta) == null ? void 0 : o.attribute) || e.id, d = !e.column.columnDef.enableSorting, w = ((u = (s = e.column.columnDef.meta) == null ? void 0 : s.columnDef) == null ? void 0 : u.width) || "auto", m = () => {
    if (!(r === void 0 || d)) {
      var g = f;
      switch (g) {
        case "asc":
          g = "desc";
          break;
        case "desc":
          g = "";
          break;
        default:
          g = "asc";
          break;
      }
      v(g), r(b, g);
    }
  }, y = e.column.columnDef.meta;
  return e.column.columnDef.columns ? /* @__PURE__ */ l(A, { className: "plr-baseGrid-header-cell", colSpan: e.colSpan, children: /* @__PURE__ */ l("div", { style: {
    display: "flex",
    fontWeight: "bold",
    alignItems: "center",
    gap: "10px",
    width: w,
    justifyContent: "center"
  }, children: t }) }, e.id) : /* @__PURE__ */ l(
    A,
    {
      colSpan: e.colSpan,
      className: "plr-baseGrid-header-cell",
      children: /* @__PURE__ */ D("div", { style: {
        display: "flex",
        fontWeight: "bold",
        alignItems: "center",
        gap: "10px",
        width: w,
        justifyContent: ((h = y == null ? void 0 : y.columnDef) == null ? void 0 : h.type) === "number" ? "flex-end" : "flex-start"
      }, onClick: () => m(), children: [
        t,
        f === "asc" ? /* @__PURE__ */ l(at, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : f === "desc" ? /* @__PURE__ */ l(ot, { style: { fontSize: "18px", color: "rgb(0,0,0,0.5)" } }) : null
      ] })
    },
    e.id
  );
}, lt = () => /* @__PURE__ */ D("div", { className: "plr-loading-container", children: [
  /* @__PURE__ */ l(fe, { size: 25, thickness: 4 }),
  /* @__PURE__ */ l("span", { children: "Loading Data..." })
] }), st = (e) => {
  const { columnDefs: t, rowData: r, customizer: o } = e, s = e.onColumnSort || (() => {
  }), u = e.EmptyChild || re, h = e.onRowClick || (() => {
  }), f = (o == null ? void 0 : o.preProcessData) || ((y) => y), v = o != null && o.getTableOptions ? o.getTableOptions() : {};
  o != null && o.preProcessColumns && (o == null || o.preProcessColumns(t));
  const b = {
    data: f(r),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: t,
    getCoreRowModel: pe(),
    ...v
  }, [d, w] = L({});
  q(() => {
    s(d);
  }, [d]);
  const m = (y, g) => {
    var n = { ...d };
    g == "" ? delete n[y] : n[y] = g, w(n);
  };
  return { onColumnSort: e.onColumnSort ? m : () => {
  }, onRowClick: h, options: b, EmptyChild: u };
};
function ct(e) {
  const { rowData: t, customizer: r } = e, { onColumnSort: o, options: s, EmptyChild: u, onRowClick: h } = st(e), f = r != null && r.getTableRef ? r == null ? void 0 : r.getTableRef() : M(), v = de(s);
  return f.current = v, /* @__PURE__ */ l(S, { children: /* @__PURE__ */ D("div", { className: e.className, children: [
    /* @__PURE__ */ D(he, { "aria-label": e["aria-label"], className: "plr-baseGrid", children: [
      /* @__PURE__ */ l(be, { className: "plr-grid-header", children: v.getHeaderGroups().map((b) => /* @__PURE__ */ l(Y, { className: "plr-grid-header-row", children: b.headers.map((d) => d.isPlaceholder ? null : /* @__PURE__ */ l(
        it,
        {
          header: d,
          onSortChange: o,
          children: G(
            d.column.columnDef.header,
            d.getContext()
          )
        },
        d.id
      )) }, b.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ l(S, {}) : /* @__PURE__ */ l(me, { children: v.getRowModel().rows.map((b, d) => {
        const w = "plr-grid-data-row plr-grid-data-row-" + (d % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ l(Y, { className: w, children: b.getVisibleCells().map((m) => {
          var y;
          const g = m.column.columnDef.meta;
          return /* @__PURE__ */ l(
            A,
            {
              className: "plr-grid-data-cell",
              style: {
                ...((y = g == null ? void 0 : g.columnDef) == null ? void 0 : y.type) === "number" ? { textAlign: "end" } : {}
              },
              onClick: () => h(b.original),
              children: G(
                m.column.columnDef.cell,
                m.getContext()
              )
            },
            m.id
          );
        }) }, b.id);
      }) }),
      !e.showFooter || t == null || t == null || t.length == 0 ? /* @__PURE__ */ l(S, {}) : /* @__PURE__ */ l(ge, { className: "plr-grid-footer", children: v.getFooterGroups().map((b) => /* @__PURE__ */ l(Y, { style: { textAlign: "end" }, className: "plr-grid-footer-row", children: b.headers.map((d) => /* @__PURE__ */ l(A, { className: "plr-grid-footer-cell", children: d.isPlaceholder ? null : G(
        d.column.columnDef.footer,
        d.getContext()
      ) }, d.id)) }, b.id)) })
    ] }),
    t == null ? /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(lt, {}) }) : t == null ? /* @__PURE__ */ l("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ l(u, {}) : /* @__PURE__ */ l(S, {})
  ] }) });
}
const ut = F(function(e, t) {
  const { columns: r, EmptyChild: o } = e, s = o || re, u = e.customizer || ee, h = ce(e), f = t || M();
  ne(f, () => h, [h]);
  const v = Ze(r, u), b = e.onRowClick ? (m) => {
    e.onRowClick(m);
  } : () => {
  }, d = h.getCurrentData(), w = h.setSortColumns;
  return /* @__PURE__ */ l(
    ct,
    {
      columnDefs: v,
      EmptyChild: s,
      customizer: u,
      rowData: d,
      onRowClick: b,
      onColumnSort: w
    }
  );
});
class pt {
  subscribe(t, r) {
    const o = R.subscribe(t, r);
    if (o)
      return o;
    throw new Error("Not able to subscribe to topic " + t);
  }
  publish(t, r) {
    return R.publish(t, r);
  }
  unsubscribe(t) {
    R.unsubscribe(t);
  }
  unsubsribeTopic(t) {
    R.unsubscribe(t);
  }
  reset() {
    R.clearAllSubscriptions();
  }
}
const j = new pt(), dt = F(function(e, t) {
  const r = t || M();
  return /* @__PURE__ */ l(S, { children: /* @__PURE__ */ l(ut, { ...e, onDataChange: (o, s) => {
    if (e.onDataChange)
      try {
        e.onDataChange(o, s);
      } catch (u) {
        console.error(u);
      }
    if (e.topic)
      try {
        j.publish(e.topic + "/data", o);
      } catch (u) {
        console.error(u);
      }
  }, ref: r }) });
}), ft = ae(10), ht = (e) => {
  var t;
  const r = (t = e.queryRef) == null ? void 0 : t.current, [o, s] = L(0);
  if (q(() => {
    if (e.topic) {
      const c = j.subscribe(e.topic + "/data", () => {
        ft(() => s((p) => p + 1));
      });
      return () => {
        j.unsubscribe(c);
      };
    }
  }, [e.topic]), !r)
    return /* @__PURE__ */ l(S, {});
  const u = r.getTotalRecords(), h = r.getQueryLimit(), f = Array.isArray(e.pageSize) ? e.pageSize : [e.pageSize], { gotoPage: v, getPageNo: b, setPageSize: d } = r, w = b(), m = h.limit || 25, y = Math.ceil(u / m), g = w * m + 1, n = Math.min((w + 1) * m, u), a = (c, p) => {
    v(p - 1);
  }, i = (c) => {
    const p = parseInt(c.target.value, 10);
    d(p);
  };
  return /* @__PURE__ */ l("div", { className: "grid-filter", children: !isNaN(y) && /* @__PURE__ */ l("div", { children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ l("div", { style: { width: "50%" }, children: f && f.length > 1 ? /* @__PURE__ */ l(ye, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ D("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("span", { children: "Showing" }) }),
      /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l(
        ve,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: f[0],
          onChange: i,
          label: "Rows per page",
          children: f.map((c) => /* @__PURE__ */ l(we, { value: c, children: c }, c))
        }
      ) }),
      /* @__PURE__ */ l("div", { children: /* @__PURE__ */ D("span", { children: [
        g,
        " - ",
        n,
        " of ",
        u,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ l("div", { style: {}, children: /* @__PURE__ */ l(
      Oe,
      {
        count: y,
        shape: "rounded",
        onChange: a,
        page: b() + 1
      }
    ) })
  ] }) }) });
};
function bt(e) {
  return W({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }, child: [] }] })(e);
}
const mt = Pe(({ className: e, ...t }) => /* @__PURE__ */ l(xe, { ...t, classes: { popper: e } }))(({ theme: e }) => ({
  [`& .${B.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: e.typography.pxToRem(16),
    border: "1px solid #dadde9"
  },
  [`& .${B.arrow}`]: {
    color: "#f5f5f9",
    "&::before": {
      backgroundColor: "#f5f5f9",
      border: "1px solid #dadde9"
    }
  }
})), gt = function() {
  return /* @__PURE__ */ l(bt, { className: "header-info-icon" });
}, yt = (e) => {
  if (e) {
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e.toolTip) {
      const r = e;
      return /* @__PURE__ */ D("div", { className: "info-header", children: [
        /* @__PURE__ */ l("span", { className: "header-content-text", children: r.title }),
        /* @__PURE__ */ l(mt, { placement: "right", title: r.toolTip, arrow: !0, children: /* @__PURE__ */ l("span", { style: { paddingBottom: "2px" }, children: /* @__PURE__ */ l(gt, {}) }) })
      ] });
    }
    const t = typeof e == "string" ? e : e.title;
    return /* @__PURE__ */ l("span", { className: "header-content-text", children: t });
  } else
    return /* @__PURE__ */ l(S, {});
}, vt = F(function(e, t) {
  const r = t || M(), o = e.topic || oe(() => "id" + Math.random(), []), s = {
    ...e.DataGridControlProps,
    queryRef: r,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    topic: o,
    quickSearch: e.quickSearch
  }, u = e.DataGridControls || ((f) => /* @__PURE__ */ l(S, { children: /* @__PURE__ */ l(ie, { title: "Filter", PrefixAdornment: /* @__PURE__ */ l(le, {}), children: /* @__PURE__ */ l(se, { ...f }) }) })), h = e.DataGridPagination || ht;
  return /* @__PURE__ */ D(S, { children: [
    /* @__PURE__ */ D("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ l("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ l("div", { className: "py-datagrid-title", children: yt(e.title) }) }),
      /* @__PURE__ */ l("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ l(u, { ...s }) })
    ] }),
    /* @__PURE__ */ l(dt, { ...e, topic: o, ref: r }),
    /* @__PURE__ */ l(h, { ...s })
  ] });
}), zt = F(function(e, t) {
  const r = e.topic, o = t || M();
  return q(() => {
    if (e.topic) {
      const s = j.subscribe(r + "/refresh", () => {
        o.current && o.current.refresh();
      }), u = j.subscribe(r + "/filter", (h, f) => {
        o.current && o.current.setFilter(f);
      });
      return () => {
        j.unsubscribe(s), j.unsubscribe(u);
      };
    }
  }, [r]), /* @__PURE__ */ l(S, { children: /* @__PURE__ */ l(vt, { ...e, ref: o }) });
});
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var E = { exports: {} };
E.exports;
(function(e, t) {
  (function(r, o) {
    var s = {};
    r.PubSub ? (s = r.PubSub, console.warn("PubSub already loaded, using existing version")) : (r.PubSub = s, o(s)), e !== void 0 && e.exports && (t = e.exports = s), t.PubSub = s, e.exports = t = s;
  })(typeof window == "object" && window || wt, function(r) {
    var o = {}, s = -1, u = "*";
    function h(n) {
      var a;
      for (a in n)
        if (Object.prototype.hasOwnProperty.call(n, a))
          return !0;
      return !1;
    }
    function f(n) {
      return function() {
        throw n;
      };
    }
    function v(n, a, i) {
      try {
        n(a, i);
      } catch (c) {
        setTimeout(f(c), 0);
      }
    }
    function b(n, a, i) {
      n(a, i);
    }
    function d(n, a, i, c) {
      var p = o[a], O = c ? b : v, P;
      if (Object.prototype.hasOwnProperty.call(o, a))
        for (P in p)
          Object.prototype.hasOwnProperty.call(p, P) && O(p[P], n, i);
    }
    function w(n, a, i) {
      return function() {
        var c = String(n), p = c.lastIndexOf(".");
        for (d(n, n, a, i); p !== -1; )
          c = c.substr(0, p), p = c.lastIndexOf("."), d(n, c, a, i);
        d(n, u, a, i);
      };
    }
    function m(n) {
      var a = String(n), i = !!(Object.prototype.hasOwnProperty.call(o, a) && h(o[a]));
      return i;
    }
    function y(n) {
      for (var a = String(n), i = m(a) || m(u), c = a.lastIndexOf("."); !i && c !== -1; )
        a = a.substr(0, c), c = a.lastIndexOf("."), i = m(a);
      return i;
    }
    function g(n, a, i, c) {
      n = typeof n == "symbol" ? n.toString() : n;
      var p = w(n, a, c), O = y(n);
      return O ? (i === !0 ? p() : setTimeout(p, 0), !0) : !1;
    }
    r.publish = function(n, a) {
      return g(n, a, !1, r.immediateExceptions);
    }, r.publishSync = function(n, a) {
      return g(n, a, !0, r.immediateExceptions);
    }, r.subscribe = function(n, a) {
      if (typeof a != "function")
        return !1;
      n = typeof n == "symbol" ? n.toString() : n, Object.prototype.hasOwnProperty.call(o, n) || (o[n] = {});
      var i = "uid_" + String(++s);
      return o[n][i] = a, i;
    }, r.subscribeAll = function(n) {
      return r.subscribe(u, n);
    }, r.subscribeOnce = function(n, a) {
      var i = r.subscribe(n, function() {
        r.unsubscribe(i), a.apply(this, arguments);
      });
      return r;
    }, r.clearAllSubscriptions = function() {
      o = {};
    }, r.clearSubscriptions = function(n) {
      var a;
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && delete o[a];
    }, r.countSubscriptions = function(n) {
      var a, i, c = 0;
      for (a in o)
        if (Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0) {
          for (i in o[a])
            c++;
          break;
        }
      return c;
    }, r.getSubscriptions = function(n) {
      var a, i = [];
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && i.push(a);
      return i;
    }, r.unsubscribe = function(n) {
      var a = function(I) {
        var $;
        for ($ in o)
          if (Object.prototype.hasOwnProperty.call(o, $) && $.indexOf(I) === 0)
            return !0;
        return !1;
      }, i = typeof n == "string" && (Object.prototype.hasOwnProperty.call(o, n) || a(n)), c = !i && typeof n == "string", p = typeof n == "function", O = !1, P, x, C;
      if (i) {
        r.clearSubscriptions(n);
        return;
      }
      for (P in o)
        if (Object.prototype.hasOwnProperty.call(o, P)) {
          if (x = o[P], c && x[n]) {
            delete x[n], O = n;
            break;
          }
          if (p)
            for (C in x)
              Object.prototype.hasOwnProperty.call(x, C) && x[C] === n && (delete x[C], O = !0);
        }
      return O;
    };
  });
})(E, E.exports);
var Pt = E.exports;
const Et = /* @__PURE__ */ Ot(Pt);
var xt = Object.defineProperty, St = (e, t, r) => t in e ? xt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Z = (e, t, r) => St(e, typeof t != "symbol" ? t + "" : t, r);
class Dt {
  constructor() {
    Z(this, "format", (t) => t), Z(this, "parse", (t) => t);
  }
}
new Dt();
export {
  Et as A,
  zt as F
};
