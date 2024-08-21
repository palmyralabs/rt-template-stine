import { jsx as n } from "react/jsx-runtime";
import { useRef as d } from "react";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { F as u } from "../../../chunks/NoopConverter.js";
import { SummaryGridControls as s } from "./SummaryGridControls.js";
import { useNavigate as g } from "react-router-dom";
import "dayjs";
const f = function(t, e) {
  return e ? typeof t == "string" && e instanceof Array ? t.replace(/({\d})/g, function(i) {
    let r = i.replace(/{/, "").replace(/}/, "");
    return e[r];
  }) : typeof t == "string" && e instanceof Object ? Object.keys(e).length === 0 ? t : t.replace(/({([^}]+)})/g, function(i) {
    let r = i.replace(/{/, "").replace(/}/, "");
    return e[r] ? e[r] : i;
  }) : t : t;
};
function z(t) {
  const e = g(), i = t.idKey || "id", r = t.gridRef || d(null), o = (a) => {
    const l = { id: a[i] }, m = t.grid || "view";
    e(f(m + "/{id}", l));
  }, c = () => {
    e("new");
  };
  return /* @__PURE__ */ n("div", { className: "grid-renderer-container", children: /* @__PURE__ */ n("div", { className: "palmyra-grid-container summary-grid", children: /* @__PURE__ */ n(
    u,
    {
      title: t.title,
      columns: t.columns,
      getPluginOptions: t.getPluginOptions,
      DataGridControls: s,
      DataGridControlProps: { newRecord: c },
      onRowClick: o,
      pageSize: t.pageSize,
      ...t.options,
      ref: r,
      customizer: t.customizer,
      quickSearch: t.quickSearch
    }
  ) }) });
}
export {
  z as SummaryGrid
};
