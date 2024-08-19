import { jsxs as p, Fragment as c, jsx as e } from "react/jsx-runtime";
import "react";
import { Button as u } from "@mui/material";
import { T as d, F as l, P as m } from "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
const b = (t) => {
  var n, s;
  const { getPluginOptions: i, ...o } = t, r = i ? i() : {};
  return /* @__PURE__ */ p(c, { children: [
    o.quickSearch && /* @__PURE__ */ e(
      d,
      {
        width: "200",
        queryRef: o.queryRef,
        columns: o.columns,
        ...r.quickSearch
      }
    ),
    /* @__PURE__ */ e(l, { ...o }),
    /* @__PURE__ */ e(u, { onClick: () => t.setFormData({}), ...r.add, children: "Add" }),
    /* @__PURE__ */ e(
      m,
      {
        exportOption: { csv: "CSV" },
        visible: (n = r.export) == null ? void 0 : n.visible,
        disabled: (s = r.export) == null ? void 0 : s.disabled,
        queryRef: o.queryRef,
        ...r.export
      }
    )
  ] });
};
export {
  b as PopupGridControls
};
