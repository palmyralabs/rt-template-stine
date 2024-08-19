import { jsx as t, jsxs as a } from "react/jsx-runtime";
import { useState as b, useRef as w } from "react";
import { Button as c } from "@mui/material";
import { Close as p, Done as v } from "@mui/icons-material";
import { useNavigate as g } from "react-router-dom";
import { B as n } from "../../../chunks/react-toastify.esm.js";
import { PalmyraNewForm as D } from "@palmyralabs/rt-forms";
function T(r) {
  const d = g(), [o, m] = b(!1), s = w(), f = r.storeFactory, h = r.initialData || {}, u = r.pageName, i = r.errorText, y = () => {
    n.error("Something went wrong Please try again later.. ");
  }, N = () => {
    i ? n.error(i) : n.error("Data Already Exit");
  }, l = () => {
    s.current.saveData().then((e) => d("../" + u)).catch((e) => {
      e.response && e.response.status === 400 ? N() : e.response && e.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ t("div", { className: "form-container", children: /* @__PURE__ */ a("form", { onKeyDown: (e) => {
    e.ctrlKey && e.key === "s" && (e.preventDefault(), o && l());
  }, children: [
    /* @__PURE__ */ a("div", { className: "form-header-container", children: [
      /* @__PURE__ */ t("div", { children: r.title }),
      /* @__PURE__ */ a("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ a(
          c,
          {
            className: "cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ t(p, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ a(
          c,
          {
            disabled: !o,
            className: o ? "filled-button" : "disabled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ t(v, { className: "button-icon" }),
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
