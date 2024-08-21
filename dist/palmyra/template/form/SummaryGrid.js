import { jsx as o } from "react/jsx-runtime";
import { useRef as d } from "react";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { F as s } from "../../../chunks/NoopConverter.js";
import { SummaryGridControls as u } from "./SummaryGridControls.js";
import { useNavigate as f } from "react-router-dom";
import "dayjs";
const g = function(r, t) {
  return t ? typeof r == "string" && t instanceof Array ? r.replace(/({\d})/g, function(e) {
    let i = e.replace(/{/, "").replace(/}/, "");
    return t[i];
  }) : typeof r == "string" && t instanceof Object ? Object.keys(t).length === 0 ? r : r.replace(/({([^}]+)})/g, function(e) {
    let i = e.replace(/{/, "").replace(/}/, "");
    return t[i] ? t[i] : e;
  }) : r : r;
};
function z(r) {
  const t = f(), e = r.idKey || "id", i = r.gridRef || d(null), n = (a) => {
    const m = { id: a[e] }, l = r.grid || "view";
    t(g(l + "/{id}", m));
  }, c = () => {
    t("new");
  };
  return /* @__PURE__ */ o("div", { className: "grid-renderer-container", children: /* @__PURE__ */ o("div", { className: "palmyra-grid-container summary-grid", children: /* @__PURE__ */ o(
    s,
    {
      title: r.title,
      columns: r.columns,
      DataGridControls: u,
      DataGridControlProps: { newRecord: c },
      onRowClick: n,
      pageSize: r.pageSize,
      ...r.options,
      ref: i,
      customizer: r.customizer,
      quickSearch: r.quickSearch
    }
  ) }) });
}
export {
  z as SummaryGrid
};
