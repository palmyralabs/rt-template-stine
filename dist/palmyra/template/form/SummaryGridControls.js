import { jsxs as s, Fragment as u, jsx as r } from "react/jsx-runtime";
import { QuickSearch as d, FilterButton as l, ExportDataButton as m } from "@palmyralabs/rt-forms-mui";
import { Button as a } from "@mui/material";
import { Add as p } from "@mui/icons-material";
const y = (e) => {
  var n, c;
  const { getPluginOptions: i, ...t } = e, o = i ? i() : {};
  return /* @__PURE__ */ s(u, { children: [
    t.quickSearch && /* @__PURE__ */ r(
      d,
      {
        width: "200",
        queryRef: t.queryRef,
        columns: t.columns,
        ...o.quickSearch
      }
    ),
    /* @__PURE__ */ r(l, { ...t }),
    /* @__PURE__ */ r(
      m,
      {
        exportOption: { csv: "CSV" },
        visible: (n = o.export) == null ? void 0 : n.visible,
        disabled: (c = o.export) == null ? void 0 : c.disabled,
        queryRef: t.queryRef,
        ...o.export
      }
    ),
    /* @__PURE__ */ s(a, { onClick: () => e.newRecord(), ...o.add, className: "py-action-button", children: [
      /* @__PURE__ */ r(p, {}),
      "Add"
    ] })
  ] });
};
export {
  y as SummaryGridControls
};
