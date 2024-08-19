import { isValidElement as x } from "react";
const m = (n) => typeof n == "number" && !isNaN(n), u = (n) => typeof n == "string", b = (n) => typeof n == "function", L = (n) => x(n) || u(n) || b(n) || m(n), s = /* @__PURE__ */ new Map();
let v = [];
const T = /* @__PURE__ */ new Set(), k = () => s.size > 0;
function M(n, o) {
  var r;
  if (o) return !((r = s.get(o)) == null || !r.isToastActive(n));
  let e = !1;
  return s.forEach((i) => {
    i.isToastActive(n) && (e = !0);
  }), e;
}
function N(n, o) {
  L(n) && (k() || v.push({ content: n, options: o }), s.forEach((r) => {
    r.buildToast(n, o);
  }));
}
function C(n, o) {
  s.forEach((r) => {
    o != null && o != null && o.containerId ? (o == null ? void 0 : o.containerId) === r.id && r.toggle(n, o == null ? void 0 : o.id) : r.toggle(n, o == null ? void 0 : o.id);
  });
}
let O = 1;
const A = () => "" + O++;
function Q(n) {
  return n && (u(n.toastId) || m(n.toastId)) ? n.toastId : A();
}
function c(n, o) {
  return N(n, o), o.toastId;
}
function p(n, o) {
  return { ...o, type: o && o.type || n, toastId: Q(o) };
}
function g(n) {
  return (o, r) => c(o, p(n, r));
}
function t(n, o) {
  return c(n, p("default", o));
}
t.loading = (n, o) => c(n, p("default", { isLoading: !0, autoClose: !1, closeOnClick: !1, closeButton: !1, draggable: !1, ...o })), t.promise = function(n, o, r) {
  let e, { pending: i, error: a, success: l } = o;
  i && (e = u(i) ? t.loading(i, r) : t.loading(i.render, { ...r, ...i }));
  const B = { isLoading: null, autoClose: null, closeOnClick: null, closeButton: null, draggable: null }, h = (d, f, w) => {
    if (f == null) return void t.dismiss(e);
    const E = { type: d, ...B, ...r, data: w }, I = u(f) ? { render: f } : f;
    return e ? t.update(e, { ...E, ...I }) : t(I.render, { ...E, ...I }), w;
  }, y = b(n) ? n() : n;
  return y.then((d) => h("success", l, d)).catch((d) => h("error", a, d)), y;
}, t.success = g("success"), t.info = g("info"), t.error = g("error"), t.warning = g("warning"), t.warn = t.warning, t.dark = (n, o) => c(n, p("default", { theme: "dark", ...o })), t.dismiss = function(n) {
  (function(o) {
    var r;
    if (k()) {
      if (o == null || u(r = o) || m(r)) s.forEach((e) => {
        e.removeToast(o);
      });
      else if (o && ("containerId" in o || "id" in o)) {
        const e = s.get(o.containerId);
        e ? e.removeToast(o.id) : s.forEach((i) => {
          i.removeToast(o.id);
        });
      }
    } else v = v.filter((e) => o != null && e.options.toastId !== o);
  })(n);
}, t.clearWaitingQueue = function(n) {
  n === void 0 && (n = {}), s.forEach((o) => {
    !o.props.limit || n.containerId && o.id !== n.containerId || o.clearQueue();
  });
}, t.isActive = M, t.update = function(n, o) {
  o === void 0 && (o = {});
  const r = ((e, i) => {
    var a;
    let { containerId: l } = i;
    return (a = s.get(l || 1)) == null ? void 0 : a.toasts.get(e);
  })(n, o);
  if (r) {
    const { props: e, content: i } = r, a = { delay: 100, ...e, ...o, toastId: o.toastId || n, updateId: A() };
    a.toastId !== n && (a.staleId = n);
    const l = a.render || i;
    delete a.render, c(l, a);
  }
}, t.done = (n) => {
  t.update(n, { progress: 1 });
}, t.onChange = function(n) {
  return T.add(n), () => {
    T.delete(n);
  };
}, t.play = (n) => C(!0, n), t.pause = (n) => C(!1, n);
export {
  t as B
};
