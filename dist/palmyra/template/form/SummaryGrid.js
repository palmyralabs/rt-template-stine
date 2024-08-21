import { jsx as r } from "react/jsx-runtime";
import { useRef as d } from "react";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { F as l } from "../../../chunks/NoopConverter.js";
import { SummaryGridControls as s } from "./SummaryGridControls.js";
import { u, a as f } from "../../../chunks/StringUtil.js";
import "dayjs";
function z(i) {
  const e = u(), t = i.idKey || "id", o = i.gridRef || d(null), a = (m) => {
    const c = { id: m[t] };
    e(f("view/{id}", c));
  }, n = () => {
    e("new");
  };
  return /* @__PURE__ */ r("div", { className: "grid-renderer-container", children: /* @__PURE__ */ r("div", { className: "palmyra-grid-container summary-grid", children: /* @__PURE__ */ r(
    l,
    {
      title: i.title,
      columns: i.columns,
      DataGridControls: s,
      DataGridControlProps: { newRecord: n },
      onRowClick: a,
      pageSize: i.pageSize,
      ...i.options,
      ref: o,
      customizer: i.customizer,
      quickSearch: i.quickSearch
    }
  ) }) });
}
export {
  z as SummaryGrid
};
