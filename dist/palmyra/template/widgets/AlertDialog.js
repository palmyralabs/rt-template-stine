import { jsx as o, Fragment as g, jsxs as m } from "react/jsx-runtime";
import y from "react-dom";
import { Dialog as R, DialogTitle as f, DialogContent as h, DialogActions as C, Button as E } from "@mui/material";
import { forwardRef as D, useState as _, useRef as p, useImperativeHandle as N } from "react";
var l = {}, r = y;
if (process.env.NODE_ENV === "production")
  l.createRoot = r.createRoot, l.hydrateRoot = r.hydrateRoot;
else {
  var s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  l.createRoot = function(e, t) {
    s.usingClientEntryPoint = !0;
    try {
      return r.createRoot(e, t);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  }, l.hydrateRoot = function(e, t, n) {
    s.usingClientEntryPoint = !0;
    try {
      return r.hydrateRoot(e, t, n);
    } finally {
      s.usingClientEntryPoint = !1;
    }
  };
}
const P = D(function(t, n) {
  const { buttonText: a = "OK" } = t, [i, c] = _(!t.hidden), u = n || p();
  N(u, () => ({
    hide: () => c(!1),
    show: () => c(!0)
  }), []);
  const d = () => {
    t.onClose && t.onClose(), c(!1);
  };
  return /* @__PURE__ */ o(g, { children: i && /* @__PURE__ */ m(
    R,
    {
      className: "py-alert-dialog",
      open: i,
      onClose: d,
      PaperProps: {
        sx: {
          borderRadius: "12px",
          padding: "5px",
          backgroundColor: "white"
        }
      },
      children: [
        /* @__PURE__ */ o(f, { className: "py-alert-dialog-title", children: t.title }),
        /* @__PURE__ */ o(h, { className: "py-alert-dialog-content", children: t.content }),
        /* @__PURE__ */ o(C, { className: "py-alert-dialog-action", children: /* @__PURE__ */ o(
          E,
          {
            onClick: d,
            disableRipple: !0,
            className: "py-alert-dialog-button py-alert-dialog-button-ok",
            children: a
          }
        ) })
      ]
    }
  ) });
}), I = (e, t) => {
  const n = t || P, a = l.createRoot(document.getElementById("PalmyraDialogRoot")), i = () => {
    a.unmount(), e.onClose && e.onClose();
  };
  a.render(
    /* @__PURE__ */ o(n, { ...e, onClose: i })
  );
}, T = () => /* @__PURE__ */ o("div", { id: "PalmyraDialogRoot" });
export {
  P as AlertDialog,
  T as PyDialogRoot,
  I as showDialog
};
