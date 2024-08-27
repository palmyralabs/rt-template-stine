import { jsxs as u, Fragment as c, jsx as o } from "react/jsx-runtime";
import { QuickSearch as l, FilterButton as p, ExportDataButton as a } from "@palmyralabs/rt-forms-mui";
import { Button as d } from "@mui/material";
const b = (r) => {
  var n, s;
  const { getPluginOptions: i, ...t } = r, e = i ? i() : {};
  return /* @__PURE__ */ u(c, { children: [
    t.quickSearch && /* @__PURE__ */ o(
      l,
      {
        width: "200",
        queryRef: t.queryRef,
        columns: t.columns,
        ...e.quickSearch
      }
    ),
    /* @__PURE__ */ o(p, { ...t }),
    /* @__PURE__ */ o(
      a,
      {
        exportOption: { csv: "CSV" },
        visible: (n = e.export) == null ? void 0 : n.visible,
        disabled: (s = e.export) == null ? void 0 : s.disabled,
        queryRef: t.queryRef,
        ...e.export
      }
    ),
    /* @__PURE__ */ o(
      d,
      {
        disableRipple: !0,
        className: "py-action-button",
        onClick: () => r.setFormData({}),
        ...e.add,
        children: "Add"
      }
    )
  ] });
};
export {
  b as PopupGridControls
};
