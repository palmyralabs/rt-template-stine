import { jsx as o, Fragment as k, jsxs as n } from "react/jsx-runtime";
import { forwardRef as M, useState as O, useRef as g, useImperativeHandle as P } from "react";
import { Close as y, Done as j } from "@mui/icons-material";
import { Dialog as H, Button as p } from "@mui/material";
import { useSaveForm as I } from "../hooks/useSaveForm.js";
import { EditForm as L } from "./EditForm.js";
import { NewForm as T } from "./NewForm.js";
const Q = M((e, v) => {
  const F = e.title, a = e.idKey || "id", x = e.dialogHeight || "auto", d = e.dialogWidth || "auto", C = e.dialogMinWidth || "600px", [t, i] = O(void 0), N = g(0), c = e.gridRef, b = v || g();
  P(b, () => ({ setData: i }), [c]);
  const R = () => {
    i(void 0);
  }, w = () => {
    i(void 0), s();
  }, s = () => {
    N.current += 1, c.current.refresh();
  }, D = (W) => {
    console.log(W);
  }, {
    doCancel: r,
    doSaveClose: E,
    handleKeyPress: l,
    setValid: m,
    isValid: h,
    formRef: u
  } = I({ onCancel: R, onComplete: w, onFailure: D, onSave: s }), f = t != null, S = e.EditFormlet, K = e.NewFormlet;
  return /* @__PURE__ */ o(k, { children: f && /* @__PURE__ */ n(
    H,
    {
      open: f,
      onClose: r,
      onKeyDown: l,
      PaperProps: {
        sx: {
          width: d,
          minWidth: C,
          height: x,
          borderRadius: "15px",
          padding: "20px 15px",
          maxWidth: d
        }
      },
      children: [
        /* @__PURE__ */ n("div", { className: "py-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: F }),
          /* @__PURE__ */ o("div", { className: "py-dialog-header-right-container", children: /* @__PURE__ */ o(y, { onClick: r, className: "py-header-close-icon" }) })
        ] }),
        t != null && t[a] ? /* @__PURE__ */ o(
          L,
          {
            setValid: m,
            formRef: u,
            handleKeyPress: l,
            options: e.options,
            ...e.options,
            id: t == null ? void 0 : t[a],
            FORMLET: S
          }
        ) : /* @__PURE__ */ o(
          T,
          {
            setValid: m,
            formRef: u,
            handleKeyPress: l,
            options: e.options,
            ...e.options,
            initialData: t,
            FORMLET: K
          }
        ),
        /* @__PURE__ */ n("div", { className: "py-drawer-form-btn-container", children: [
          /* @__PURE__ */ n(
            p,
            {
              className: "py-cancel-filled-button",
              onClick: r,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(y, { className: "py-button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ n(
            p,
            {
              disabled: !h,
              className: h ? "py-filled-button" : "py-disabled-button",
              onClick: E,
              children: [
                /* @__PURE__ */ o(j, { className: "py-button-icon" }),
                /* @__PURE__ */ o("u", { style: { width: "5px" }, children: "S" }),
                "ave"
              ]
            }
          )
        ] })
      ]
    }
  ) });
});
export {
  Q as SummaryDialogForm
};
