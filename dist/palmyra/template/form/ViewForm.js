import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { ArrowBack as m, BorderColor as s } from "@mui/icons-material";
import { Button as n } from "@mui/material";
import { useNavigate as u } from "react-router-dom";
import { PalmyraViewForm as f } from "@palmyralabs/rt-forms";
function g(e) {
  const a = e.storeFactory, c = e.id, i = e.pageName, r = u(), l = () => r("../" + i + "/edit/" + e.id), d = () => r("../" + i);
  return /* @__PURE__ */ o("div", { className: "py-form-container", children: [
    /* @__PURE__ */ o("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ t("div", { children: e.title }),
      /* @__PURE__ */ o("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ o(
          n,
          {
            onClick: d,
            className: "py-filled-button",
            disableRipple: !0,
            children: [
              /* @__PURE__ */ t(m, { className: "py-button-icon" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ o(
          n,
          {
            className: "py-filled-button",
            disableRipple: !0,
            onClick: l,
            children: [
              /* @__PURE__ */ t(s, { className: "py-button-icon" }),
              "Edit"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(f, { id: c, ...e.options, storeFactory: a, children: e.children })
  ] });
}
export {
  g as ViewForm
};
