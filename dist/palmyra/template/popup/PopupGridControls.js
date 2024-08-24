import { jsxs as p, Fragment as c, jsx as t } from "react/jsx-runtime";
import "react";
import { Button as l } from "@mui/material";
import { k as u, F as d, P as m } from "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
const h = (r) => {
  var n, s;
  const { getPluginOptions: i, ...e } = r, o = i ? i() : {};
  return /* @__PURE__ */ p(c, { children: [
    e.quickSearch && /* @__PURE__ */ t(
      u,
      {
        width: "200",
        queryRef: e.queryRef,
        columns: e.columns,
        ...o.quickSearch
      }
    ),
    /* @__PURE__ */ t(d, { ...e }),
    /* @__PURE__ */ t(
      m,
      {
        exportOption: { csv: "CSV" },
        visible: (n = o.export) == null ? void 0 : n.visible,
        disabled: (s = o.export) == null ? void 0 : s.disabled,
        queryRef: e.queryRef,
        ...o.export
      }
    ),
    /* @__PURE__ */ t(
      l,
      {
        disableRipple: !0,
        className: "py-action-button",
        onClick: () => r.setFormData({}),
        ...o.add,
        children: "Add"
      }
    )
  ] });
};
export {
  h as PopupGridControls
};
