import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { useState as p, useRef as b } from "react";
import { Button as c } from "@mui/material";
import { Close as v, Done as N } from "@mui/icons-material";
import { useNavigate as g } from "react-router-dom";
import { B as D } from "../../../chunks/react-toastify.esm.js";
import { PalmyraEditForm as w } from "@palmyralabs/rt-forms";
function V(e) {
  const l = g(), [r, d] = p(!1), s = b(), m = e.storeFactory, f = e.id, h = e.pageName, u = (t) => (e.onDataRefresh && e.onDataRefresh(t), t), y = () => {
    D.error("Something went wrong Please try again later.. ");
  }, i = () => {
    s.current.saveData().then((n) => {
      l("../" + h);
    }).catch((n) => {
      n.response && n.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ a("div", { className: "py-form-container", children: /* @__PURE__ */ o("form", { onKeyDown: (t) => {
    t.ctrlKey && t.key === "s" && (t.preventDefault(), r && i());
  }, children: [
    /* @__PURE__ */ o("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ a("div", { children: e.title }),
      /* @__PURE__ */ o("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ o(
          c,
          {
            className: "py-cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ a(v, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ o(
          c,
          {
            disabled: !r,
            className: r ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: i,
            children: [
              /* @__PURE__ */ a(N, { className: "py-button-icon" }),
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
        mode: "save",
        id: f,
        ...e.options,
        onQueryData: u,
        onValidChange: d,
        ref: s,
        storeFactory: m,
        children: e.children
      }
    )
  ] }) });
}
export {
  V as SaveForm
};
