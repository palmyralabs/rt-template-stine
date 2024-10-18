import { jsx as o, jsxs as t } from "react/jsx-runtime";
import { forwardRef as K, useState as O, useRef as y, useImperativeHandle as P } from "react";
import { Close as p, Done as j } from "@mui/icons-material";
import { Drawer as I, Button as v } from "@mui/material";
import { useSaveForm as L } from "../hooks/useSaveForm.js";
import { EditForm as M } from "./EditForm.js";
import { NewForm as T } from "./NewForm.js";
const z = K((e, w) => {
  const F = e.title, c = e.idKey || "id", N = e.dialogWidth || "600px", [n, r] = O(void 0), C = y(0), a = e.gridRef, b = w || y();
  P(b, () => ({ setData: r }), [a]);
  const i = () => {
    r(void 0);
  }, R = () => {
    r(void 0), s();
  }, s = () => {
    C.current += 1, a.current.refresh();
  }, x = (u) => (i(), !1), g = (u) => {
    console.log(u);
  }, {
    doCancel: l,
    doSaveClose: E,
    handleKeyPress: d,
    setValid: m,
    isValid: f,
    formRef: h
  } = L({ onCancel: i, onComplete: R, onFailure: g, onSave: s }), S = n != null, D = e.EditFormlet, k = e.NewFormlet;
  return /* @__PURE__ */ o(
    I,
    {
      anchor: "right",
      PaperProps: { sx: { width: N } },
      open: S,
      onClose: i,
      children: /* @__PURE__ */ t("div", { className: "py-drawer-content-container", children: [
        /* @__PURE__ */ t("div", { className: "py-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: F }),
          /* @__PURE__ */ o("div", { className: "py-drawer-header-right-container", children: /* @__PURE__ */ o(p, { onClick: l, className: "py-header-close-icon" }) })
        ] }),
        n != null && n[c] ? /* @__PURE__ */ o(
          M,
          {
            setValid: m,
            formRef: h,
            onQueryFailure: x,
            handleKeyPress: d,
            options: e.options,
            ...e.options,
            id: n == null ? void 0 : n[c],
            FORMLET: D
          }
        ) : /* @__PURE__ */ o(
          T,
          {
            setValid: m,
            formRef: h,
            handleKeyPress: d,
            options: e.options,
            ...e.options,
            initialData: n,
            FORMLET: k
          }
        ),
        /* @__PURE__ */ t("div", { className: "py-drawer-form-btn-container", children: [
          /* @__PURE__ */ t(
            v,
            {
              className: "py-cancel-filled-button",
              onClick: l,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(p, { className: "py-button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ t(
            v,
            {
              disabled: !f,
              className: f ? "py-filled-button" : "py-disabled-button",
              onClick: E,
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
  z as SummaryDrawerForm
};
