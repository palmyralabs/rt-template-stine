import { jsx as t, jsxs as s } from "react/jsx-runtime";
import { useState as p, useRef as N } from "react";
import { Button as c } from "@mui/material";
import { Close as b, Done as g } from "@mui/icons-material";
import { useNavigate as w } from "react-router-dom";
import { B as a } from "../../../chunks/react-toastify.esm.js";
import { PalmyraNewForm as v } from "@palmyralabs/rt-forms";
function T(r) {
  const m = w(), [o, d] = p(!1), i = N(), f = r.initialData || {}, u = r.pageName, n = r.errorText, h = () => {
    a.error("Something went wrong Please try again later.. ");
  }, y = () => {
    n ? a.error(n) : a.error("Data Already Exit");
  }, l = () => {
    i.current.saveData().then((e) => {
      if (e)
        return r.successMsg && a.success(r.successMsg), m("../" + u);
    }).catch((e) => {
      e.response && e.response.status === 400 ? y() : e.response && e.response.status === 500 && h();
    });
  };
  return /* @__PURE__ */ t("div", { className: "py-form-container", children: /* @__PURE__ */ s("form", { onKeyDown: (e) => {
    e.ctrlKey && e.key === "s" && (e.preventDefault(), o && l());
  }, children: [
    /* @__PURE__ */ s("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ t("div", { children: r.title }),
      /* @__PURE__ */ s("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ s(
          c,
          {
            className: "py-cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ t(b, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ s(
          c,
          {
            disabled: !o,
            className: o ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ t(g, { className: "py-button-icon" }),
              /* @__PURE__ */ t("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(
      v,
      {
        onValidChange: d,
        ...r.options,
        ref: i,
        initialData: f,
        children: r.children
      }
    )
  ] }) });
}
export {
  T as NewForm
};
