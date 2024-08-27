import { jsx as t, jsxs as s } from "react/jsx-runtime";
import { useState as N, useRef as b } from "react";
import { Button as l } from "@mui/material";
import { Close as g, Done as w } from "@mui/icons-material";
import { useNavigate as v } from "react-router-dom";
import { B as a } from "../../../chunks/react-toastify.esm.js";
import { PalmyraNewForm as D } from "@palmyralabs/rt-forms";
function T(r) {
  const m = v(), [o, d] = N(!1), n = b(), f = r.storeFactory, u = r.initialData || {}, h = r.pageName, i = r.errorText, y = () => {
    a.error("Something went wrong Please try again later.. ");
  }, p = () => {
    i ? a.error(i) : a.error("Data Already Exit");
  }, c = () => {
    n.current.saveData().then((e) => {
      if (e)
        return r.successMsg && a.success(r.successMsg), m("../" + h);
    }).catch((e) => {
      e.response && e.response.status === 400 ? p() : e.response && e.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ t("div", { className: "py-form-container", children: /* @__PURE__ */ s("form", { onKeyDown: (e) => {
    e.ctrlKey && e.key === "s" && (e.preventDefault(), o && c());
  }, children: [
    /* @__PURE__ */ s("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ t("div", { children: r.title }),
      /* @__PURE__ */ s("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ s(
          l,
          {
            className: "py-cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ t(g, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ s(
          l,
          {
            disabled: !o,
            className: o ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: c,
            children: [
              /* @__PURE__ */ t(w, { className: "py-button-icon" }),
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
        onValidChange: d,
        ...r.options,
        ref: n,
        storeFactory: f,
        initialData: u,
        children: r.children
      }
    )
  ] }) });
}
export {
  T as NewForm
};
