import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { useState as g, useRef as N } from "react";
import { Button as c } from "@mui/material";
import { Close as p, Done as v } from "@mui/icons-material";
import { useNavigate as D } from "react-router-dom";
import { B as l } from "../../../chunks/react-toastify.esm.js";
import { PalmyraEditForm as w } from "@palmyralabs/rt-forms";
function E(e) {
  const d = D(), [n, m] = g(!1), r = N(), f = e.storeFactory, h = e.id, u = e.pageName, y = () => {
    l.error("Something went wrong Please try again later.. ");
  }, i = () => {
    r.current.saveData().then((o) => {
      o && (e.successMsg && l.success(e.successMsg), d("../" + u));
    }).catch((o) => {
      o.response && o.response.status === 500 && y();
    });
  }, b = (t) => (e.onDataRefresh && e.onDataRefresh(t), t);
  return /* @__PURE__ */ a("div", { className: "py-form-container", children: /* @__PURE__ */ s("form", { onKeyDown: (t) => {
    t.ctrlKey && t.key === "s" && (t.preventDefault(), n && i());
  }, children: [
    /* @__PURE__ */ s("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ a("div", { children: e.title }),
      /* @__PURE__ */ s("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ s(
          c,
          {
            className: "py-cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ a(p, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ s(
          c,
          {
            disabled: !n,
            className: n ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: i,
            children: [
              /* @__PURE__ */ a(v, { className: "py-button-icon" }),
              /* @__PURE__ */ a("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a(
      w,
      {
        mode: "edit",
        id: h,
        ...e.options,
        onQueryData: b,
        onValidChange: m,
        ref: r,
        storeFactory: f,
        children: e.children
      }
    )
  ] }) });
}
export {
  E as EditForm
};
