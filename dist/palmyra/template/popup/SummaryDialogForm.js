import { jsx as o, Fragment as M, jsxs as n } from "react/jsx-runtime";
import { forwardRef as O, useState as P, useRef as g, useImperativeHandle as j } from "react";
import { Close as F, Done as H } from "@mui/icons-material";
import { Dialog as I, Button as v } from "@mui/material";
import { useSaveForm as L } from "../hooks/useSaveForm.js";
import { EditForm as T } from "./EditForm.js";
import { NewForm as V } from "./NewForm.js";
const U = O((e, p) => {
  const c = e.storeFactory, x = e.title, l = e.idKey || "id", C = e.dialogHeight || "auto", d = e.dialogWidth || "auto", N = e.dialogMinWidth || "600px", [t, i] = P(void 0), b = g(0), s = e.gridRef, R = p || g();
  j(R, () => ({ setData: i }), [s]);
  const w = () => {
    i(void 0);
  }, D = () => {
    i(void 0), m();
  }, m = () => {
    b.current += 1, s.current.refresh();
  }, E = (k) => {
    console.log(k);
  }, {
    doCancel: r,
    doSaveClose: S,
    handleKeyPress: a,
    setValid: h,
    isValid: u,
    formRef: f
  } = L({ onCancel: w, onComplete: D, onFailure: E, onSave: m }), y = t != null, K = e.EditFormlet, W = e.NewFormlet;
  return /* @__PURE__ */ o(M, { children: y && /* @__PURE__ */ n(
    I,
    {
      open: y,
      onClose: r,
      onKeyDown: a,
      PaperProps: {
        sx: {
          width: d,
          minWidth: N,
          height: C,
          borderRadius: "15px",
          padding: "20px 15px",
          maxWidth: d
        }
      },
      children: [
        /* @__PURE__ */ n("div", { className: "py-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: x }),
          /* @__PURE__ */ o("div", { className: "py-dialog-header-right-container", children: /* @__PURE__ */ o(F, { onClick: r, className: "py-header-close-icon" }) })
        ] }),
        t != null && t[l] ? /* @__PURE__ */ o(
          T,
          {
            setValid: h,
            storeFactory: c,
            formRef: f,
            handleKeyPress: a,
            options: e.options,
            ...e.options,
            id: t == null ? void 0 : t[l],
            FORMLET: K
          }
        ) : /* @__PURE__ */ o(
          V,
          {
            setValid: h,
            storeFactory: c,
            formRef: f,
            handleKeyPress: a,
            options: e.options,
            ...e.options,
            initialData: t,
            FORMLET: W
          }
        ),
        /* @__PURE__ */ n("div", { className: "py-drawer-form-btn-container", children: [
          /* @__PURE__ */ n(
            v,
            {
              className: "py-cancel-filled-button",
              onClick: r,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(F, { className: "py-button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ n(
            v,
            {
              disabled: !u,
              className: u ? "py-filled-button" : "py-disabled-button",
              onClick: S,
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
  U as SummaryDialogForm
};
