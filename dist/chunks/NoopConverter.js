import { jsx as i, jsxs as x, Fragment as C } from "react/jsx-runtime";
import { useState as L, useEffect as q, useRef as M, forwardRef as F, useImperativeHandle as ne, useMemo as oe } from "react";
import { n as T, E as B, u as ae, R as ie, o as se, _ as le } from "./ExportDataButton.js";
import { useServerQuery as ce } from "@palmyralabs/rt-forms";
import { createColumnHelper as ue, getCoreRowModel as de, useReactTable as pe, flexRender as z } from "@tanstack/react-table";
import k from "dayjs";
import { TableCell as A, CircularProgress as fe, Table as he, TableHead as be, TableRow as Y, TableBody as me, TableFooter as ye, FormControl as ge, Select as ve, MenuItem as we, Pagination as Oe, styled as Pe, Tooltip as Se, tooltipClasses as W } from "@mui/material";
import '../assets/NoopConverter.css';var xe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function De(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var E = { exports: {} };
E.exports;
(function(e, t) {
  (function(r, o) {
    var l = {};
    r.PubSub ? (l = r.PubSub, console.warn("PubSub already loaded, using existing version")) : (r.PubSub = l, o(l)), e !== void 0 && e.exports && (t = e.exports = l), t.PubSub = l, e.exports = t = l;
  })(typeof window == "object" && window || xe, function(r) {
    var o = {}, l = -1, u = "*";
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
    function y(n, a, s) {
      try {
        n(a, s);
      } catch (c) {
        setTimeout(f(c), 0);
      }
    }
    function b(n, a, s) {
      n(a, s);
    }
    function d(n, a, s, c) {
      var p = o[a], w = c ? b : y, O;
      if (Object.prototype.hasOwnProperty.call(o, a))
        for (O in p)
          Object.prototype.hasOwnProperty.call(p, O) && w(p[O], n, s);
    }
    function S(n, a, s) {
      return function() {
        var c = String(n), p = c.lastIndexOf(".");
        for (d(n, n, a, s); p !== -1; )
          c = c.substr(0, p), p = c.lastIndexOf("."), d(n, c, a, s);
        d(n, u, a, s);
      };
    }
    function m(n) {
      var a = String(n), s = !!(Object.prototype.hasOwnProperty.call(o, a) && h(o[a]));
      return s;
    }
    function g(n) {
      for (var a = String(n), s = m(a) || m(u), c = a.lastIndexOf("."); !s && c !== -1; )
        a = a.substr(0, c), c = a.lastIndexOf("."), s = m(a);
      return s;
    }
    function v(n, a, s, c) {
      n = typeof n == "symbol" ? n.toString() : n;
      var p = S(n, a, c), w = g(n);
      return w ? (s === !0 ? p() : setTimeout(p, 0), !0) : !1;
    }
    r.publish = function(n, a) {
      return v(n, a, !1, r.immediateExceptions);
    }, r.publishSync = function(n, a) {
      return v(n, a, !0, r.immediateExceptions);
    }, r.subscribe = function(n, a) {
      if (typeof a != "function")
        return !1;
      n = typeof n == "symbol" ? n.toString() : n, Object.prototype.hasOwnProperty.call(o, n) || (o[n] = {});
      var s = "uid_" + String(++l);
      return o[n][s] = a, s;
    }, r.subscribeAll = function(n) {
      return r.subscribe(u, n);
    }, r.subscribeOnce = function(n, a) {
      var s = r.subscribe(n, function() {
        r.unsubscribe(s), a.apply(this, arguments);
      });
      return r;
    }, r.clearAllSubscriptions = function() {
      o = {};
    }, r.clearSubscriptions = function(n) {
      var a;
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && delete o[a];
    }, r.countSubscriptions = function(n) {
      var a, s, c = 0;
      for (a in o)
        if (Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0) {
          for (s in o[a])
            c++;
          break;
        }
      return c;
    }, r.getSubscriptions = function(n) {
      var a, s = [];
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && s.push(a);
      return s;
    }, r.unsubscribe = function(n) {
      var a = function(I) {
        var $;
        for ($ in o)
          if (Object.prototype.hasOwnProperty.call(o, $) && $.indexOf(I) === 0)
            return !0;
        return !1;
      }, s = typeof n == "string" && (Object.prototype.hasOwnProperty.call(o, n) || a(n)), c = !s && typeof n == "string", p = typeof n == "function", w = !1, O, P, D;
      if (s) {
        r.clearSubscriptions(n);
        return;
      }
      for (O in o)
        if (Object.prototype.hasOwnProperty.call(o, O)) {
          if (P = o[O], c && P[n]) {
            delete P[n], w = n;
            break;
          }
          if (p)
            for (D in P)
              Object.prototype.hasOwnProperty.call(P, D) && P[D] === n && (delete P[D], w = !0);
        }
      return w;
    };
  });
})(E, E.exports);
var Ce = E.exports;
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
      return Ee(t);
    case "autoComplete":
      return Ge(t);
    default:
      return Me(t);
  }
}, Re = (e, t) => e, Te = (e, t) => e, Me = (e, t) => e instanceof Object ? JSON.stringify(e) : e, _e = (e, t) => e, Ae = (e, t) => e, Ee = (e, t) => e, Ge = (e, t) => e, Fe = (e, t) => e, J = (e, t) => {
  var r = t.options;
  return r[e];
}, Ie = (e, t) => e, ze = (e) => (t) => ke(e, t.getValue());
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
    _(this, "serverPattern"), _(this, "getFieldData", (o, l) => T(l.attribute, o)), _(this, "getRawdata", (o, l) => T(l.attribute, o)), _(this, "getDefaultValue", (o) => o || ""), this.serverPattern = t.serverPattern || t.displayPattern || r;
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
      const l = t.charAt(0);
      if (l == ">")
        r = this._parseDate(t.slice(1));
      else if (l == "<")
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
var Be = Object.defineProperty, We = (e, t, r) => t in e ? Be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, N = (e, t, r) => We(e, typeof t != "symbol" ? t + "" : t, r);
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
  return e.map((l) => {
    const u = te(l, t);
    l.columnGroup ? ((!o || o.header != l.columnGroup) && (o = {}, o.header = l.columnGroup, o.columns = [], r.push(o)), o.columns.push(u)) : r.push(u);
  }), r;
}
function te(e, t) {
  const r = e.sortable, o = e.searchable;
  var l = e.cellRenderer;
  const u = t.formatHeader(e, rt(e)), h = t.formatFooter(e, nt());
  if (l)
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
      cell: l
    });
  let f = t.formatCell(e, ze(e));
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
  return () => /* @__PURE__ */ i("span", { children: e.label });
}
function nt(e) {
  return (t, r) => {
  };
}
const re = () => /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("div", { className: "empty-child-table-container", children: "No Data Available" }) });
function ot(e) {
  return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m3 16 4 4 4-4" }, child: [] }, { tag: "path", attr: { d: "M7 20V4" }, child: [] }, { tag: "path", attr: { d: "m21 8-4-4-4 4" }, child: [] }, { tag: "path", attr: { d: "M17 4v16" }, child: [] }] })(e);
}
function at(e) {
  return B({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "path", attr: { d: "m21 16-4 4-4-4" }, child: [] }, { tag: "path", attr: { d: "M17 20V4" }, child: [] }, { tag: "path", attr: { d: "m3 8 4-4 4 4" }, child: [] }, { tag: "path", attr: { d: "M7 4v16" }, child: [] }] })(e);
}
const it = ({ header: e, children: t, onSortChange: r }) => {
  var o, l, u, h;
  const [f, y] = L(""), b = ((o = e.column.columnDef.meta) == null ? void 0 : o.attribute) || e.id, d = !e.column.columnDef.enableSorting, S = ((u = (l = e.column.columnDef.meta) == null ? void 0 : l.columnDef) == null ? void 0 : u.width) || "auto", m = () => {
    if (!(r === void 0 || d)) {
      var n = f;
      switch (n) {
        case "asc":
          n = "desc";
          break;
        case "desc":
          n = "";
          break;
        default:
          n = "asc";
          break;
      }
      y(n), r(b, n);
    }
  }, g = e.column.columnDef.meta, v = "py-dataGrid-header-text" + (((h = g == null ? void 0 : g.columnDef) == null ? void 0 : h.type) === "number" ? "py-dataGrid-header-text-type-number" : "");
  return e.column.columnDef.columns ? /* @__PURE__ */ i(A, { className: "py-baseGrid-header-cell", colSpan: e.colSpan, children: /* @__PURE__ */ i("div", { className: v, style: { width: S }, children: t }) }, e.id) : /* @__PURE__ */ i(
    A,
    {
      colSpan: e.colSpan,
      className: "py-baseGrid-header-cell",
      children: /* @__PURE__ */ x(
        "div",
        {
          className: v,
          style: { width: S },
          onClick: () => m(),
          children: [
            t,
            f === "asc" ? /* @__PURE__ */ i(at, { className: "py-baseGrid-header-sort-icon" }) : f === "desc" ? /* @__PURE__ */ i(ot, { className: "py-baseGrid-header-sort-icon" }) : null
          ]
        }
      )
    },
    e.id
  );
}, st = () => /* @__PURE__ */ x("div", { className: "py-loading-container", children: [
  /* @__PURE__ */ i(fe, { size: 25, thickness: 4 }),
  /* @__PURE__ */ i("span", { children: "Loading Data..." })
] }), lt = (e) => {
  const { columnDefs: t, rowData: r, customizer: o } = e, l = e.onColumnSort || (() => {
  }), u = e.EmptyChild || re, h = e.onRowClick || (() => {
  }), f = (o == null ? void 0 : o.preProcessData) || ((g) => g), y = o != null && o.getTableOptions ? o.getTableOptions() : {};
  o != null && o.preProcessColumns && (o == null || o.preProcessColumns(t));
  const b = {
    data: f(r),
    manualSorting: !0,
    manualFiltering: !0,
    manualPagination: !0,
    columns: t,
    getCoreRowModel: de(),
    ...y
  }, [d, S] = L({});
  q(() => {
    l(d);
  }, [d]);
  const m = (g, v) => {
    var n = { ...d };
    v == "" ? delete n[g] : n[g] = v, S(n);
  };
  return { onColumnSort: e.onColumnSort ? m : () => {
  }, onRowClick: h, options: b, EmptyChild: u };
};
function ct(e) {
  const { rowData: t, customizer: r } = e, { onColumnSort: o, options: l, EmptyChild: u, onRowClick: h } = lt(e), f = r != null && r.getTableRef ? r == null ? void 0 : r.getTableRef() : M(), y = pe(l);
  return f.current = y, /* @__PURE__ */ i(C, { children: /* @__PURE__ */ x("div", { className: e.className, children: [
    /* @__PURE__ */ x(he, { "aria-label": e["aria-label"], className: "py-baseGrid", children: [
      /* @__PURE__ */ i(be, { className: "py-grid-header", children: y.getHeaderGroups().map((b) => /* @__PURE__ */ i(Y, { className: "py-grid-header-row", children: b.headers.map((d) => d.isPlaceholder ? null : /* @__PURE__ */ i(
        it,
        {
          header: d,
          onSortChange: o,
          children: z(
            d.column.columnDef.header,
            d.getContext()
          )
        },
        d.id
      )) }, b.id)) }),
      t == null || t == null || t.length == 0 ? /* @__PURE__ */ i(C, {}) : /* @__PURE__ */ i(me, { children: y.getRowModel().rows.map((b, d) => {
        const S = "py-grid-data-row py-grid-data-row-" + (d % 2 == 1 ? "even" : "odd");
        return /* @__PURE__ */ i(Y, { className: S, children: b.getVisibleCells().map((m) => {
          var g;
          const v = m.column.columnDef.meta, n = "py-grid-data-cell" + (((g = v == null ? void 0 : v.columnDef) == null ? void 0 : g.type) === "number" ? "py-grid-data-cell-type-number" : "");
          return /* @__PURE__ */ i(
            A,
            {
              className: n,
              onClick: () => h(b.original),
              children: z(
                m.column.columnDef.cell,
                m.getContext()
              )
            },
            m.id
          );
        }) }, b.id);
      }) }),
      !e.showFooter || t == null || t == null || t.length == 0 ? /* @__PURE__ */ i(C, {}) : /* @__PURE__ */ i(ye, { className: "py-grid-footer", children: y.getFooterGroups().map((b) => /* @__PURE__ */ i(Y, { className: "py-grid-footer-row", children: b.headers.map((d) => /* @__PURE__ */ i(A, { className: "py-grid-footer-cell", children: d.isPlaceholder ? null : z(
        d.column.columnDef.footer,
        d.getContext()
      ) }, d.id)) }, b.id)) })
    ] }),
    t == null ? /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(st, {}) }) : t == null ? /* @__PURE__ */ i("div", { children: "Error while loading data" }) : t.length == 0 ? /* @__PURE__ */ i(u, {}) : /* @__PURE__ */ i(C, {})
  ] }) });
}
const ut = F(function(e, t) {
  const { columns: r, EmptyChild: o } = e, l = o || re, u = e.customizer || ee, h = ce(e), f = t || M();
  ne(f, () => h, [h]);
  const y = Ze(r, u), b = e.onRowClick ? (m) => {
    e.onRowClick(m);
  } : () => {
  }, d = h.getCurrentData(), S = h.setSortColumns;
  return /* @__PURE__ */ i(
    ct,
    {
      columnDefs: y,
      EmptyChild: l,
      customizer: u,
      rowData: d,
      onRowClick: b,
      onColumnSort: S
    }
  );
});
class dt {
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
const j = new dt(), pt = F(function(e, t) {
  const r = t || M();
  return /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(ut, { ...e, onDataChange: (o, l) => {
    if (e.onDataChange)
      try {
        e.onDataChange(o, l);
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
  const r = (t = e.queryRef) == null ? void 0 : t.current, [o, l] = L(0);
  q(() => {
    if (e.topic) {
      const n = j.subscribe(e.topic + "/data", () => {
        ft(() => l((a) => a + 1));
      });
      return () => {
        j.unsubscribe(n);
      };
    }
  }, [e.topic]);
  const u = (r == null ? void 0 : r.getTotalRecords()) || 0, h = (r == null ? void 0 : r.getQueryLimit()) || { limit: 15 }, f = Array.isArray(e.pageSize) ? e.pageSize : [e.pageSize], y = (r == null ? void 0 : r.getPageNo()) || 0, b = h.limit || 25, d = Math.ceil(u / b), S = y * b + 1, m = Math.min((y + 1) * b, u), g = (n, a) => {
    r.gotoPage(a - 1);
  }, v = (n) => {
    const a = parseInt(n.target.value, 10);
    r.setPageSize(a);
  };
  return /* @__PURE__ */ i("div", { className: "grid-filter", children: !isNaN(d) && /* @__PURE__ */ i("div", { children: /* @__PURE__ */ x("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
    /* @__PURE__ */ i("div", { style: { width: "50%" }, children: f && f.length > 1 ? /* @__PURE__ */ i(ge, { variant: "standard", sx: { m: 1, minWidth: 120 }, children: /* @__PURE__ */ x("div", { style: { display: "flex", alignItems: "center", gap: "10px" }, children: [
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i("span", { children: "Showing" }) }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
        ve,
        {
          labelId: "rows-per-page-select-label",
          id: "rows-per-page-select",
          defaultValue: f[0],
          onChange: v,
          label: "Rows per page",
          children: f.map((n) => /* @__PURE__ */ i(we, { value: n, children: n }, n))
        }
      ) }),
      /* @__PURE__ */ i("div", { children: /* @__PURE__ */ x("span", { children: [
        S,
        " - ",
        m,
        " of ",
        u,
        " Results"
      ] }) })
    ] }) }) : null }),
    /* @__PURE__ */ i("div", { style: {}, children: /* @__PURE__ */ i(
      Oe,
      {
        count: d,
        shape: "rounded",
        onChange: g,
        page: y + 1
      }
    ) })
  ] }) }) });
};
function bt(e) {
  return B({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" }, child: [] }, { tag: "path", attr: { d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }, child: [] }] })(e);
}
const mt = Pe(({ className: e, ...t }) => /* @__PURE__ */ i(Se, { ...t, classes: { popper: e } }))(({ theme: e }) => ({
  [`& .${W.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 500,
    fontSize: e.typography.pxToRem(16),
    border: "1px solid #dadde9"
  },
  [`& .${W.arrow}`]: {
    color: "#f5f5f9",
    "&::before": {
      backgroundColor: "#f5f5f9",
      border: "1px solid #dadde9"
    }
  }
})), yt = function() {
  return /* @__PURE__ */ i(bt, { className: "header-info-icon" });
}, gt = (e) => {
  if (e) {
    if (typeof e == "function")
      return e();
    if (typeof e == "object" && e.toolTip) {
      const r = e;
      return /* @__PURE__ */ x("div", { className: "info-header", children: [
        /* @__PURE__ */ i("span", { className: "header-content-text", children: r.title }),
        /* @__PURE__ */ i(mt, { placement: "right", title: r.toolTip, arrow: !0, children: /* @__PURE__ */ i("span", { style: { paddingBottom: "2px" }, children: /* @__PURE__ */ i(yt, {}) }) })
      ] });
    }
    const t = typeof e == "string" ? e : e.title;
    return /* @__PURE__ */ i("span", { className: "header-content-text", children: t });
  } else
    return /* @__PURE__ */ i(C, {});
}, vt = F(function(e, t) {
  const r = t || M(), o = e.topic || oe(() => "id" + Math.random(), []), l = {
    ...e.DataGridControlProps,
    queryRef: r,
    columns: e.columns,
    getPluginOptions: e.getPluginOptions,
    pageSize: e.pageSize,
    topic: o,
    quickSearch: e.quickSearch
  }, u = e.DataGridControls || ((f) => /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(ie, { title: "Filter", PrefixAdornment: /* @__PURE__ */ i(se, {}), children: /* @__PURE__ */ i(le, { ...f }) }) })), h = e.DataGridPagination || ht;
  return /* @__PURE__ */ x(C, { children: [
    /* @__PURE__ */ x("div", { className: "py-datagrid-header", children: [
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-right-container", children: /* @__PURE__ */ i("div", { className: "py-datagrid-title", children: gt(e.title) }) }),
      /* @__PURE__ */ i("div", { className: "py-datagrid-header-left-container", children: /* @__PURE__ */ i(u, { ...l }) })
    ] }),
    /* @__PURE__ */ i("div", { className: "py-data-grid-table", children: /* @__PURE__ */ i(pt, { ...e, topic: o, ref: r }) }),
    /* @__PURE__ */ i(h, { ...l })
  ] });
}), Et = F(function(e, t) {
  const r = e.topic, o = t || M();
  return q(() => {
    if (e.topic) {
      const l = j.subscribe(r + "/refresh", () => {
        o.current && o.current.refresh();
      }), u = j.subscribe(r + "/filter", (h, f) => {
        o.current && o.current.setFilter(f);
      });
      return () => {
        j.unsubscribe(l), j.unsubscribe(u);
      };
    }
  }, [r]), /* @__PURE__ */ i(C, { children: /* @__PURE__ */ i(vt, { ...e, ref: o }) });
});
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ot(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var G = { exports: {} };
G.exports;
(function(e, t) {
  (function(r, o) {
    var l = {};
    r.PubSub ? (l = r.PubSub, console.warn("PubSub already loaded, using existing version")) : (r.PubSub = l, o(l)), e !== void 0 && e.exports && (t = e.exports = l), t.PubSub = l, e.exports = t = l;
  })(typeof window == "object" && window || wt, function(r) {
    var o = {}, l = -1, u = "*";
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
    function y(n, a, s) {
      try {
        n(a, s);
      } catch (c) {
        setTimeout(f(c), 0);
      }
    }
    function b(n, a, s) {
      n(a, s);
    }
    function d(n, a, s, c) {
      var p = o[a], w = c ? b : y, O;
      if (Object.prototype.hasOwnProperty.call(o, a))
        for (O in p)
          Object.prototype.hasOwnProperty.call(p, O) && w(p[O], n, s);
    }
    function S(n, a, s) {
      return function() {
        var c = String(n), p = c.lastIndexOf(".");
        for (d(n, n, a, s); p !== -1; )
          c = c.substr(0, p), p = c.lastIndexOf("."), d(n, c, a, s);
        d(n, u, a, s);
      };
    }
    function m(n) {
      var a = String(n), s = !!(Object.prototype.hasOwnProperty.call(o, a) && h(o[a]));
      return s;
    }
    function g(n) {
      for (var a = String(n), s = m(a) || m(u), c = a.lastIndexOf("."); !s && c !== -1; )
        a = a.substr(0, c), c = a.lastIndexOf("."), s = m(a);
      return s;
    }
    function v(n, a, s, c) {
      n = typeof n == "symbol" ? n.toString() : n;
      var p = S(n, a, c), w = g(n);
      return w ? (s === !0 ? p() : setTimeout(p, 0), !0) : !1;
    }
    r.publish = function(n, a) {
      return v(n, a, !1, r.immediateExceptions);
    }, r.publishSync = function(n, a) {
      return v(n, a, !0, r.immediateExceptions);
    }, r.subscribe = function(n, a) {
      if (typeof a != "function")
        return !1;
      n = typeof n == "symbol" ? n.toString() : n, Object.prototype.hasOwnProperty.call(o, n) || (o[n] = {});
      var s = "uid_" + String(++l);
      return o[n][s] = a, s;
    }, r.subscribeAll = function(n) {
      return r.subscribe(u, n);
    }, r.subscribeOnce = function(n, a) {
      var s = r.subscribe(n, function() {
        r.unsubscribe(s), a.apply(this, arguments);
      });
      return r;
    }, r.clearAllSubscriptions = function() {
      o = {};
    }, r.clearSubscriptions = function(n) {
      var a;
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && delete o[a];
    }, r.countSubscriptions = function(n) {
      var a, s, c = 0;
      for (a in o)
        if (Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0) {
          for (s in o[a])
            c++;
          break;
        }
      return c;
    }, r.getSubscriptions = function(n) {
      var a, s = [];
      for (a in o)
        Object.prototype.hasOwnProperty.call(o, a) && a.indexOf(n) === 0 && s.push(a);
      return s;
    }, r.unsubscribe = function(n) {
      var a = function(I) {
        var $;
        for ($ in o)
          if (Object.prototype.hasOwnProperty.call(o, $) && $.indexOf(I) === 0)
            return !0;
        return !1;
      }, s = typeof n == "string" && (Object.prototype.hasOwnProperty.call(o, n) || a(n)), c = !s && typeof n == "string", p = typeof n == "function", w = !1, O, P, D;
      if (s) {
        r.clearSubscriptions(n);
        return;
      }
      for (O in o)
        if (Object.prototype.hasOwnProperty.call(o, O)) {
          if (P = o[O], c && P[n]) {
            delete P[n], w = n;
            break;
          }
          if (p)
            for (D in P)
              Object.prototype.hasOwnProperty.call(P, D) && P[D] === n && (delete P[D], w = !0);
        }
      return w;
    };
  });
})(G, G.exports);
var Pt = G.exports;
const Gt = /* @__PURE__ */ Ot(Pt);
var St = Object.defineProperty, xt = (e, t, r) => t in e ? St(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Z = (e, t, r) => xt(e, typeof t != "symbol" ? t + "" : t, r);
class Dt {
  constructor() {
    Z(this, "format", (t) => t), Z(this, "parse", (t) => t);
  }
}
new Dt();
export {
  Gt as A,
  Et as F
};
