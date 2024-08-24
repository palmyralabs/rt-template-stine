import { jsx as o } from "react/jsx-runtime";
import { useRef as u } from "react";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { F as d } from "../../../chunks/NoopConverter.js";
import { SummaryGridControls as s } from "./SummaryGridControls.js";
import { useNavigate as g } from "react-router-dom";
import "dayjs";
const f = function(t, i) {
  return i ? typeof t == "string" && i instanceof Array ? t.replace(/({\d})/g, function(e) {
    let r = e.replace(/{/, "").replace(/}/, "");
    return i[r];
  }) : typeof t == "string" && i instanceof Object ? Object.keys(i).length === 0 ? t : t.replace(/({([^}]+)})/g, function(e) {
    let r = e.replace(/{/, "").replace(/}/, "");
    return i[r] ? i[r] : e;
  }) : t : t;
};
function z(t) {
  const i = g(), e = t.idKey || "id", r = t.gridRef || u(null), n = (a) => {
    const l = { id: a[e] }, m = t.grid || "view";
    i(f(m + "/{id}", l));
  }, c = () => {
    i("new");
  };
  return /* @__PURE__ */ o("div", { className: "py-grid-container", children: /* @__PURE__ */ o(
    d,
    {
      title: t.title,
      columns: t.columns,
      getPluginOptions: t.getPluginOptions,
      DataGridControls: s,
      DataGridControlProps: { newRecord: c },
      onRowClick: n,
      pageSize: t.pageSize,
      ...t.options,
      ref: r,
      customizer: t.customizer,
      quickSearch: t.quickSearch
    }
  ) });
}
export {
  z as SummaryGrid
};
