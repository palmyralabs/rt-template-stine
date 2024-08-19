import { jsx as e, Fragment as g, jsxs as y } from "react/jsx-runtime";
import m from "react-dom";
import { Dialog as R, DialogTitle as f, DialogContent as h, DialogActions as E, Button as p } from "@mui/material";
import { forwardRef as D, useState as C, useRef as _, useImperativeHandle as N } from "react";
var a = {}, r = m;
if (process.env.NODE_ENV === "production")
  a.createRoot = r.createRoot, a.hydrateRoot = r.hydrateRoot;
else {
  var l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  a.createRoot = function(o, t) {
    l.usingClientEntryPoint = !0;
    try {
      return r.createRoot(o, t);
    } finally {
      l.usingClientEntryPoint = !1;
    }
  }, a.hydrateRoot = function(o, t, n) {
    l.usingClientEntryPoint = !0;
    try {
      return r.hydrateRoot(o, t, n);
    } finally {
      l.usingClientEntryPoint = !1;
    }
  };
}
const P = D(function(t, n) {
  const { buttonText: d = "OK" } = t, [s, i] = C(!t.hidden), u = n || _();
  N(u, () => ({
    hide: () => i(!1),
    show: () => i(!0)
  }), []);
  const c = () => {
    t.onClose && t.onClose(), i(!1);
  };
  return /* @__PURE__ */ e(g, { children: s && /* @__PURE__ */ y(
    R,
    {
      className: "py-alert-dialog",
      open: s,
      onClose: c,
      PaperProps: {
        sx: {
          borderRadius: "12px",
          padding: "5px",
          backgroundColor: "white"
        }
      },
      children: [
        /* @__PURE__ */ e(f, { className: "py-alert-dialog-title", children: t.title }),
        /* @__PURE__ */ e(h, { className: "py-alert-dialog-content", children: t.content }),
        /* @__PURE__ */ e(E, { className: "py-alert-dialog-action", children: /* @__PURE__ */ e(
          p,
          {
            onClick: c,
            disableRipple: !0,
            className: "py-alert-dialog-button py-alert-dialog-button-ok",
            children: d
          }
        ) })
      ]
    }
  ) });
}), I = (o, t) => {
  const n = t || P;
  a.createRoot(document.getElementById("PalmyraDialogRoot")).render(
    /* @__PURE__ */ e(n, { ...o })
  );
}, T = () => /* @__PURE__ */ e("div", { id: "PalmyraDialogRoot" });
export {
  P as AlertDialog,
  T as PyDialogRoot,
  I as showDialog
};
