import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { forwardRef as O, useState as P, useRef as v, useImperativeHandle as j } from "react";
import { Close as F, Done as p } from "@mui/icons-material";
import { Drawer as I, Button as w } from "@mui/material";
import { useSaveForm as L } from "../hooks/useSaveForm.js";
import { EditForm as M } from "./EditForm.js";
import { NewForm as T } from "./NewForm.js";
const G = O((e, C) => {
  const i = e.storeFactory, N = e.title, c = e.idKey || "id", g = e.dialogWidth || "600px", [o, n] = P(void 0), b = v(0), a = e.gridRef, R = C || v();
  j(R, () => ({ setData: n }), [a]);
  const s = () => {
    n(void 0);
  }, x = () => {
    n(void 0), d();
  }, d = () => {
    b.current += 1, a.current.refresh();
  }, y = (K) => {
    console.log(K);
  }, {
    doCancel: l,
    doSaveClose: E,
    handleKeyPress: m,
    setValid: f,
    isValid: h,
    formRef: u
  } = L({ onCancel: s, onComplete: x, onFailure: y, onSave: d }), S = o != null, D = e.EditFormlet, k = e.NewFormlet;
  return /* @__PURE__ */ r(
    I,
    {
      anchor: "right",
      PaperProps: { sx: { width: g } },
      open: S,
      onClose: s,
      children: [
        /* @__PURE__ */ r("div", { className: "drawer-form-header-container", children: [
          /* @__PURE__ */ t("div", { children: N }),
          /* @__PURE__ */ t("div", { className: "grid-dialog-header-right-container", children: /* @__PURE__ */ t(F, { onClick: l, className: "grid-dialog-header-close-icon" }) })
        ] }),
        o != null && o[c] ? /* @__PURE__ */ t(
          M,
          {
            setValid: f,
            storeFactory: i,
            formRef: u,
            handleKeyPress: m,
            options: e.options,
            ...e.options,
            id: o == null ? void 0 : o[c],
            FORMLET: D
          }
        ) : /* @__PURE__ */ t(
          T,
          {
            setValid: f,
            storeFactory: i,
            formRef: u,
            handleKeyPress: m,
            options: e.options,
            ...e.options,
            initialData: o,
            FORMLET: k
          }
        ),
        /* @__PURE__ */ r("div", { className: "drawer-form-btn-container", children: [
          /* @__PURE__ */ r(
            w,
            {
              className: "cancel-filled-button",
              onClick: l,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ t(F, { className: "button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ r(
            w,
            {
              disabled: !h,
              className: h ? "filled-button" : "disabled-button",
              onClick: E,
              children: [
                /* @__PURE__ */ t(p, { className: "button-icon" }),
                /* @__PURE__ */ t("u", { style: { width: "5px" }, children: "S" }),
                "ave"
              ]
            }
          )
        ] })
      ]
    }
  );
});
export {
  G as SummaryDrawerForm
};
