import { jsxs as c, Fragment as d, jsx as o } from "react/jsx-runtime";
import "react";
import { Button as m } from "@mui/material";
import { T as u, F as l, P as p } from "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
const y = (i) => {
  var n, s;
  const { getPluginOptions: t, ...r } = i, e = t ? t() : {};
  return /* @__PURE__ */ c(d, { children: [
    r.quickSearch && /* @__PURE__ */ o(
      u,
      {
        width: "200",
        queryRef: r.queryRef,
        columns: r.columns,
        ...e.quickSearch
      }
    ),
    /* @__PURE__ */ o(l, { ...r }),
    /* @__PURE__ */ o(m, { onClick: () => i.newRecord(), ...e.add, children: "Add" }),
    /* @__PURE__ */ o(
      p,
      {
        exportOption: { csv: "CSV" },
        visible: (n = e.export) == null ? void 0 : n.visible,
        disabled: (s = e.export) == null ? void 0 : s.disabled,
        queryRef: r.queryRef,
        ...e.export
      }
    )
  ] });
};
export {
  y as SummaryGridControls
};
