import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { useState as N, useRef as b } from "react";
import { Button as c } from "@mui/material";
import { Close as w, Done as v } from "@mui/icons-material";
import { useNavigate as g } from "react-router-dom";
import { B as n } from "../../../chunks/react-toastify.esm.js";
import { PalmyraNewForm as D } from "@palmyralabs/rt-forms";
function T(r) {
  const d = g(), [a, m] = N(!1), s = b(), f = r.storeFactory, h = r.initialData || {}, u = r.pageName, i = r.errorText, y = () => {
    n.error("Something went wrong Please try again later.. ");
  }, p = () => {
    i ? n.error(i) : n.error("Data Already Exit");
  }, l = () => {
    s.current.saveData().then((e) => d("../" + u)).catch((e) => {
      e.response && e.response.status === 400 ? p() : e.response && e.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ t("div", { className: "py-form-container", children: /* @__PURE__ */ o("form", { onKeyDown: (e) => {
    e.ctrlKey && e.key === "s" && (e.preventDefault(), a && l());
  }, children: [
    /* @__PURE__ */ o("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ t("div", { children: r.title }),
      /* @__PURE__ */ o("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ o(
          c,
          {
            className: "py-cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ t(w, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ o(
          c,
          {
            disabled: !a,
            className: a ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ t(v, { className: "py-button-icon" }),
              /* @__PURE__ */ t("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(
      D,
      {
        onValidChange: m,
        ...r.options,
        ref: s,
        storeFactory: f,
        initialData: h,
        children: r.children
      }
    )
  ] }) });
}
export {
  T as NewForm
};
