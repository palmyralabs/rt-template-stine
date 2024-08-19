import { jsx as o, Fragment as O, jsxs as i } from "react/jsx-runtime";
import { forwardRef as P, useState as j, useRef as F, useImperativeHandle as p } from "react";
import { Close as v, Done as H } from "@mui/icons-material";
import { Dialog as I, Button as x } from "@mui/material";
import { useSaveForm as L } from "../hooks/useSaveForm.js";
import { EditForm as T } from "./EditForm.js";
import { NewForm as V } from "./NewForm.js";
const U = P((e, C) => {
  const d = e.storeFactory, N = e.title, l = e.idKey || "id", b = e.dialogHeight || "auto", c = e.dialogWidth || "auto", w = e.dialogMinWidth || "600px", [t, n] = j(void 0), R = F(0), s = e.gridRef, y = C || F();
  p(y, () => ({ setData: n }), [s]);
  const D = () => {
    n(void 0);
  }, E = () => {
    n(void 0), m();
  }, m = () => {
    R.current += 1, s.current.refresh();
  }, S = (M) => {
    console.log(M);
  }, {
    doCancel: r,
    doSaveClose: K,
    handleKeyPress: a,
    setValid: h,
    isValid: u,
    formRef: f
  } = L({ onCancel: D, onComplete: E, onFailure: S, onSave: m }), g = t != null, W = e.EditFormlet, k = e.NewFormlet;
  return /* @__PURE__ */ o(O, { children: g && /* @__PURE__ */ i(
    I,
    {
      open: g,
      onClose: r,
      onKeyDown: a,
      PaperProps: {
        sx: {
          width: c,
          minWidth: w,
          height: b,
          borderRadius: "15px",
          padding: "20px 15px",
          maxWidth: c
        }
      },
      children: [
        /* @__PURE__ */ i("div", { className: "drawer-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: N }),
          /* @__PURE__ */ o("div", { className: "grid-dialog-header-right-container", children: /* @__PURE__ */ o(v, { onClick: r, className: "grid-dialog-header-close-icon" }) })
        ] }),
        t != null && t[l] ? /* @__PURE__ */ o(
          T,
          {
            setValid: h,
            storeFactory: d,
            formRef: f,
            handleKeyPress: a,
            options: e.options,
            ...e.options,
            id: t == null ? void 0 : t[l],
            FORMLET: W
          }
        ) : /* @__PURE__ */ o(
          V,
          {
            setValid: h,
            storeFactory: d,
            formRef: f,
            handleKeyPress: a,
            options: e.options,
            ...e.options,
            initialData: t,
            FORMLET: k
          }
        ),
        /* @__PURE__ */ i("div", { className: "drawer-form-btn-container", children: [
          /* @__PURE__ */ i(
            x,
            {
              className: "cancel-filled-button",
              onClick: r,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(v, { className: "button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ i(
            x,
            {
              disabled: !u,
              className: u ? "filled-button" : "disabled-button",
              onClick: K,
              children: [
                /* @__PURE__ */ o(H, { className: "button-icon" }),
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
