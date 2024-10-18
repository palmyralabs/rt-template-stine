import { jsx as o, Fragment as M, jsxs as n } from "react/jsx-runtime";
import { forwardRef as O, useState as P, useRef as p, useImperativeHandle as j } from "react";
import { Close as v, Done as H } from "@mui/icons-material";
import { Dialog as I, Button as F } from "@mui/material";
import { useSaveForm as L } from "../hooks/useSaveForm.js";
import { EditForm as T } from "./EditForm.js";
import { NewForm as V } from "./NewForm.js";
const J = O((e, x) => {
  const C = e.title, a = e.idKey || "id", N = e.dialogHeight || "auto", d = e.dialogWidth || "auto", b = e.dialogMinWidth || "600px", [t, i] = P(void 0), R = p(0), c = e.gridRef, w = x || p();
  j(w, () => ({ setData: i }), [c]);
  const s = () => {
    i(void 0);
  }, D = () => {
    i(void 0), m();
  }, m = () => {
    R.current += 1, c.current.refresh();
  }, E = (g) => {
    console.log(g);
  }, S = (g) => (s(), !1), {
    doCancel: r,
    doSaveClose: K,
    handleKeyPress: l,
    setValid: h,
    isValid: u,
    formRef: f
  } = L({ onCancel: s, onComplete: D, onFailure: E, onSave: m }), y = t != null, W = e.EditFormlet, k = e.NewFormlet;
  return /* @__PURE__ */ o(M, { children: y && /* @__PURE__ */ n(
    I,
    {
      open: y,
      onClose: r,
      onKeyDown: l,
      PaperProps: {
        sx: {
          width: d,
          minWidth: b,
          height: N,
          borderRadius: "15px",
          padding: "20px 15px",
          maxWidth: d
        }
      },
      children: [
        /* @__PURE__ */ n("div", { className: "py-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: C }),
          /* @__PURE__ */ o("div", { className: "py-dialog-header-right-container", children: /* @__PURE__ */ o(v, { onClick: r, className: "py-header-close-icon" }) })
        ] }),
        t != null && t[a] ? /* @__PURE__ */ o(
          T,
          {
            setValid: h,
            formRef: f,
            onQueryFailure: S,
            handleKeyPress: l,
            options: e.options,
            ...e.options,
            id: t == null ? void 0 : t[a],
            FORMLET: W
          }
        ) : /* @__PURE__ */ o(
          V,
          {
            setValid: h,
            formRef: f,
            handleKeyPress: l,
            options: e.options,
            ...e.options,
            initialData: t,
            FORMLET: k
          }
        ),
        /* @__PURE__ */ n("div", { className: "py-drawer-form-btn-container", children: [
          /* @__PURE__ */ n(
            F,
            {
              className: "py-cancel-filled-button",
              onClick: r,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(v, { className: "py-button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ n(
            F,
            {
              disabled: !u,
              className: u ? "py-filled-button" : "py-disabled-button",
              onClick: K,
              children: [
                /* @__PURE__ */ o(H, { className: "py-button-icon" }),
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
  J as SummaryDialogForm
};
