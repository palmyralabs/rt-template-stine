import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { forwardRef as K, useState as O, useRef as y, useImperativeHandle as P } from "react";
import { Close as v, Done as j } from "@mui/icons-material";
import { Drawer as I, Button as w } from "@mui/material";
import { useSaveForm as L } from "../hooks/useSaveForm.js";
import { EditForm as M } from "./EditForm.js";
import { NewForm as T } from "./NewForm.js";
const G = K((e, F) => {
  const i = e.storeFactory, p = e.title, c = e.idKey || "id", N = e.dialogWidth || "600px", [t, r] = O(void 0), C = y(0), a = e.gridRef, b = F || y();
  P(b, () => ({ setData: r }), [a]);
  const s = () => {
    r(void 0);
  }, R = () => {
    r(void 0), l();
  }, l = () => {
    C.current += 1, a.current.refresh();
  }, x = (k) => {
    console.log(k);
  }, {
    doCancel: d,
    doSaveClose: g,
    handleKeyPress: m,
    setValid: h,
    isValid: f,
    formRef: u
  } = L({ onCancel: s, onComplete: R, onFailure: x, onSave: l }), E = t != null, S = e.EditFormlet, D = e.NewFormlet;
  return /* @__PURE__ */ o(
    I,
    {
      anchor: "right",
      PaperProps: { sx: { width: N } },
      open: E,
      onClose: s,
      children: /* @__PURE__ */ n("div", { className: "py-drawer-content-container", children: [
        /* @__PURE__ */ n("div", { className: "py-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: p }),
          /* @__PURE__ */ o("div", { className: "py-drawer-header-right-container", children: /* @__PURE__ */ o(v, { onClick: d, className: "py-header-close-icon" }) })
        ] }),
        t != null && t[c] ? /* @__PURE__ */ o(
          M,
          {
            setValid: h,
            storeFactory: i,
            formRef: u,
            handleKeyPress: m,
            options: e.options,
            ...e.options,
            id: t == null ? void 0 : t[c],
            FORMLET: S
          }
        ) : /* @__PURE__ */ o(
          T,
          {
            setValid: h,
            storeFactory: i,
            formRef: u,
            handleKeyPress: m,
            options: e.options,
            ...e.options,
            initialData: t,
            FORMLET: D
          }
        ),
        /* @__PURE__ */ n("div", { className: "py-drawer-form-btn-container", children: [
          /* @__PURE__ */ n(
            w,
            {
              className: "py-cancel-filled-button",
              onClick: d,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(v, { className: "py-button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ n(
            w,
            {
              disabled: !f,
              className: f ? "py-filled-button" : "py-disabled-button",
              onClick: g,
              children: [
                /* @__PURE__ */ o(j, { className: "py-button-icon" }),
                /* @__PURE__ */ o("u", { style: { width: "5px" }, children: "S" }),
                "ave"
              ]
            }
          )
        ] })
      ] })
    }
  );
});
export {
  G as SummaryDrawerForm
};
