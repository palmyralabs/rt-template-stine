import { jsx as a, jsxs as n } from "react/jsx-runtime";
import { useState as y, useRef as p } from "react";
import { Button as l } from "@mui/material";
import { Close as b, Done as v } from "@mui/icons-material";
import { useNavigate as N } from "react-router-dom";
import { B as g } from "../../../chunks/react-toastify.esm.js";
import { PalmyraEditForm as D } from "@palmyralabs/rt-forms";
function F(e) {
  const c = N(), [o, d] = y(!1), i = p(), m = e.id, f = e.pageName, h = (t) => (e.onDataRefresh && e.onDataRefresh(t), t), u = () => {
    g.error("Something went wrong Please try again later.. ");
  }, s = () => {
    i.current.saveData().then((r) => {
      c("../" + f);
    }).catch((r) => {
      r.response && r.response.status === 500 && u();
    });
  };
  return /* @__PURE__ */ a("div", { className: "py-form-container", children: /* @__PURE__ */ n("form", { onKeyDown: (t) => {
    t.ctrlKey && t.key === "s" && (t.preventDefault(), o && s());
  }, children: [
    /* @__PURE__ */ n("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ a("div", { children: e.title }),
      /* @__PURE__ */ n("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ n(
          l,
          {
            className: "py-cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ a(b, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ n(
          l,
          {
            disabled: !o,
            className: o ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: s,
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
      D,
      {
        mode: "save",
        id: m,
        ...e.options,
        onQueryData: h,
        onValidChange: d,
        ref: i,
        children: e.children
      }
    )
  ] }) });
}
export {
  F as SaveForm
};
