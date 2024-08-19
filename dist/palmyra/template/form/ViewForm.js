import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { ArrowBack as m, BorderColor as s } from "@mui/icons-material";
import { Button as n } from "@mui/material";
import { useNavigate as u } from "react-router-dom";
import { PalmyraViewForm as f } from "@palmyralabs/rt-forms";
function F(e) {
  const a = e.storeFactory, c = e.id, t = e.pageName, r = u(), l = () => r("../" + t + "/edit/" + e.id), d = () => r("../" + t);
  return /* @__PURE__ */ i("div", { className: "form-container", children: [
    /* @__PURE__ */ i("div", { className: "form-header-container", children: [
      /* @__PURE__ */ o("div", { children: e.title }),
      /* @__PURE__ */ i("div", { className: "form-header-btn-container", children: [
        /* @__PURE__ */ i(
          n,
          {
            onClick: d,
            className: "filled-button",
            disableRipple: !0,
            children: [
              /* @__PURE__ */ o(m, { className: "button-icon" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ i(
          n,
          {
            className: "filled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ o(s, { className: "button-icon" }),
              "Edit"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(f, { id: c, ...e.options, storeFactory: a, children: e.children })
  ] });
}
export {
  F as ViewForm
};
