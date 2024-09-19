import { jsx as o, jsxs as t } from "react/jsx-runtime";
import { forwardRef as k, useState as K, useRef as u, useImperativeHandle as O } from "react";
import { Close as y, Done as P } from "@mui/icons-material";
import { Drawer as j, Button as p } from "@mui/material";
import { useSaveForm as I } from "../hooks/useSaveForm.js";
import { EditForm as L } from "./EditForm.js";
import { NewForm as M } from "./NewForm.js";
const A = k((e, v) => {
  const w = e.title, i = e.idKey || "id", N = e.dialogWidth || "600px", [n, r] = K(void 0), C = u(0), c = e.gridRef, F = v || u();
  O(F, () => ({ setData: r }), [c]);
  const a = () => {
    r(void 0);
  }, b = () => {
    r(void 0), s();
  }, s = () => {
    C.current += 1, c.current.refresh();
  }, R = (D) => {
    console.log(D);
  }, {
    doCancel: l,
    doSaveClose: x,
    handleKeyPress: d,
    setValid: m,
    isValid: h,
    formRef: f
  } = I({ onCancel: a, onComplete: b, onFailure: R, onSave: s }), g = n != null, E = e.EditFormlet, S = e.NewFormlet;
  return /* @__PURE__ */ o(
    j,
    {
      anchor: "right",
      PaperProps: { sx: { width: N } },
      open: g,
      onClose: a,
      children: /* @__PURE__ */ t("div", { className: "py-drawer-content-container", children: [
        /* @__PURE__ */ t("div", { className: "py-form-header-container", children: [
          /* @__PURE__ */ o("div", { children: w }),
          /* @__PURE__ */ o("div", { className: "py-drawer-header-right-container", children: /* @__PURE__ */ o(y, { onClick: l, className: "py-header-close-icon" }) })
        ] }),
        n != null && n[i] ? /* @__PURE__ */ o(
          L,
          {
            setValid: m,
            formRef: f,
            handleKeyPress: d,
            options: e.options,
            ...e.options,
            id: n == null ? void 0 : n[i],
            FORMLET: E
          }
        ) : /* @__PURE__ */ o(
          M,
          {
            setValid: m,
            formRef: f,
            handleKeyPress: d,
            options: e.options,
            ...e.options,
            initialData: n,
            FORMLET: S
          }
        ),
        /* @__PURE__ */ t("div", { className: "py-drawer-form-btn-container", children: [
          /* @__PURE__ */ t(
            p,
            {
              className: "py-cancel-filled-button",
              onClick: l,
              tabIndex: -1,
              children: [
                /* @__PURE__ */ o(y, { className: "py-button-icon" }),
                "Cancel"
              ]
            }
          ),
          /* @__PURE__ */ t(
            p,
            {
              disabled: !h,
              className: h ? "py-filled-button" : "py-disabled-button",
              onClick: x,
              children: [
                /* @__PURE__ */ o(P, { className: "py-button-icon" }),
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
  A as SummaryDrawerForm
};
