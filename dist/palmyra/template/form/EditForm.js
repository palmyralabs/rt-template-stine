import { jsx as a, jsxs as s } from "react/jsx-runtime";
import { useState as b, useRef as p } from "react";
import { Button as c } from "@mui/material";
import { Close as g, Done as N } from "@mui/icons-material";
import { useNavigate as v } from "react-router-dom";
import { B as l } from "../../../chunks/react-toastify.esm.js";
import { PalmyraEditForm as D } from "@palmyralabs/rt-forms";
function E(e) {
  const d = v(), [i, m] = b(!1), o = p(), f = e.id, h = e.pageName, u = () => {
    l.error("Something went wrong Please try again later.. ");
  }, r = () => {
    o.current.saveData().then((n) => {
      n && (e.successMsg && l.success(e.successMsg), d("../" + h));
    }).catch((n) => {
      n.response && n.response.status === 500 && u();
    });
  }, y = (t) => (e.onDataRefresh && e.onDataRefresh(t), t);
  return /* @__PURE__ */ a("div", { className: "py-form-container", children: /* @__PURE__ */ s("form", { onKeyDown: (t) => {
    t.ctrlKey && t.key === "s" && (t.preventDefault(), i && r());
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
              /* @__PURE__ */ a(g, { className: "py-button-icon" }),
              "Cancel"
            ]
          }
        ),
        /* @__PURE__ */ s(
          c,
          {
            disabled: !i,
            className: i ? "py-filled-button" : "py-disabled-button",
            disableRipple: !0,
            onClick: r,
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
      D,
      {
        mode: "edit",
        id: f,
        ...e.options,
        onQueryData: y,
        onValidChange: m,
        ref: o,
        children: e.children
      }
    )
  ] }) });
}
export {
  E as EditForm
};
