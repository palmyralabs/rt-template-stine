import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { useState as b, useRef as N } from "react";
import { Button as c } from "@mui/material";
import { Close as v, Done as g } from "@mui/icons-material";
import { useNavigate as D } from "react-router-dom";
import { B as w } from "../../../chunks/react-toastify.esm.js";
import { PalmyraEditForm as R } from "@palmyralabs/rt-forms";
function E(e) {
  const l = D(), [r, d] = b(!1), i = N(), m = e.storeFactory, f = e.id, h = e.pageName, u = () => {
    w.error("Something went wrong Please try again later.. ");
  }, s = () => {
    i.current.saveData().then((n) => {
      l("../" + h);
    }).catch((n) => {
      n.response && n.response.status === 500 && u();
    });
  }, y = (t) => (e.onDataRefresh && e.onDataRefresh(t), t);
  return /* @__PURE__ */ a("div", { className: "form-container", children: /* @__PURE__ */ o("form", { onKeyDown: (t) => {
    t.ctrlKey && t.key === "s" && (t.preventDefault(), r && s());
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
              /* @__PURE__ */ a(v, { className: "button-icon" }),
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
            onClick: s,
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
        mode: "edit",
        id: f,
        ...e.options,
        onQueryData: y,
        onValidChange: d,
        ref: i,
        storeFactory: m,
        children: e.children
      }
    )
  ] }) });
}
export {
  E as EditForm
};
