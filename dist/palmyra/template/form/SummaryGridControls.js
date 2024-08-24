import { jsxs as c, Fragment as m, jsx as r } from "react/jsx-runtime";
import "react";
import { Button as u } from "@mui/material";
import { k as d, F as l, N as p } from "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
const b = (t) => {
  var n, s;
  const { getPluginOptions: i, ...o } = t, e = i ? i() : {};
  return /* @__PURE__ */ c(m, { children: [
    o.quickSearch && /* @__PURE__ */ r(
      d,
      {
        width: "200",
        queryRef: o.queryRef,
        columns: o.columns,
        ...e.quickSearch
      }
    ),
    /* @__PURE__ */ r(l, { ...o }),
    /* @__PURE__ */ r(
      p,
      {
        exportOption: { csv: "CSV" },
        visible: (n = e.export) == null ? void 0 : n.visible,
        disabled: (s = e.export) == null ? void 0 : s.disabled,
        queryRef: o.queryRef,
        ...e.export
      }
    ),
    /* @__PURE__ */ r(u, { onClick: () => t.newRecord(), ...e.add, className: "py-action-button", children: "Add" })
  ] });
};
export {
  b as SummaryGridControls
};
