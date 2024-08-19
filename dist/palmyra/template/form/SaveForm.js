import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { useState as b, useRef as v } from "react";
import { Button as c } from "@mui/material";
import { Close as N, Done as g } from "@mui/icons-material";
import { useNavigate as D } from "react-router-dom";
import { B as w } from "../../../chunks/react-toastify.esm.js";
import { PalmyraEditForm as R } from "@palmyralabs/rt-forms";
function V(e) {
  const l = D(), [r, d] = b(!1), s = v(), m = e.storeFactory, f = e.id, h = e.pageName, u = (t) => (e.onDataRefresh && e.onDataRefresh(t), t), y = () => {
    w.error("Something went wrong Please try again later.. ");
  }, i = () => {
    s.current.saveData().then((n) => {
      l("../" + h);
    }).catch((n) => {
      n.response && n.response.status === 500 && y();
    });
  };
  return /* @__PURE__ */ a("div", { className: "form-container", children: /* @__PURE__ */ o("form", { onKeyDown: (t) => {
    t.ctrlKey && t.key === "s" && (t.preventDefault(), r && i());
  }, children: [
    /* @__PURE__ */ o("div", { className: "form-header-container", children: [
      /* @__PURE__ */ a("div", { children: e.title }),
      /* @__PURE__ */ o("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ o(
          c,
          {
            className: "cancel-filled-button",
            disableRipple: !0,
            onClick: () => window.history.back(),
            children: [
              /* @__PURE__ */ a(N, { className: "button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ o(
          c,
          {
            disabled: !r,
            className: r ? "filled-button" : "disabled-button",
            disableRipple: !0,
            onClick: i,
            children: [
              /* @__PURE__ */ a(g, { className: "button-icon" }),
              /* @__PURE__ */ a("u", { style: { width: "5px" }, children: "S" }),
              "ave"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ a(
      R,
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
