import { jsxs as i, jsx as o } from "react/jsx-runtime";
import { ArrowBack as d, BorderColor as m } from "@mui/icons-material";
import { Button as n } from "@mui/material";
import { useNavigate as s } from "react-router-dom";
import { PalmyraViewForm as u } from "@palmyralabs/rt-forms";
function b(e) {
  const a = e.id, r = e.pageName, t = s(), c = () => t("../" + r + "/edit/" + e.id), l = () => t("../" + r);
  return /* @__PURE__ */ i("div", { className: "py-form-container", children: [
    /* @__PURE__ */ i("div", { className: "py-form-header-container", children: [
      /* @__PURE__ */ o("div", { children: e.title }),
      /* @__PURE__ */ i("div", { className: "py-form-header-button-container", children: [
        /* @__PURE__ */ i(
          n,
          {
            onClick: l,
            className: "py-filled-button",
            disableRipple: !0,
            children: [
              /* @__PURE__ */ o(d, { className: "py-button-icon" }),
              "Back"
            ]
          }
        ),
        /* @__PURE__ */ i(
          n,
          {
            className: "py-filled-button",
            disableRipple: !0,
            onClick: c,
            children: [
              /* @__PURE__ */ o(m, { className: "py-button-icon" }),
              "Edit"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ o(u, { id: a, ...e.options, children: e.children })
  ] });
}
export {
  b as ViewForm
};
