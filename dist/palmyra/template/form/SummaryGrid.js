import { jsx as o } from "react/jsx-runtime";
import { useRef as u } from "react";
import { PalmyraGrid as f } from "@palmyralabs/rt-forms-mui";
import { SummaryGridControls as g } from "./SummaryGridControls.js";
import { useNavigate as y } from "react-router-dom";
import "../../../chunks/Layout.js";
import "dayjs";
const P = function(t, i) {
  return i ? typeof t == "string" && i instanceof Array ? t.replace(/({\d})/g, function(e) {
    let n = e.replace(/{/, "").replace(/}/, "");
    return i[n];
  }) : typeof t == "string" && i instanceof Object ? Object.keys(i).length === 0 ? t : t.replace(/({([^}]+)})/g, function(e) {
    let n = e.replace(/{/, "").replace(/}/, "");
    return i[n] ? i[n] : e;
  }) : t : t;
};
function h(t) {
  const i = y(), e = t.idKey || "id", n = t.gridRef || u(null), r = (d) => {
    const m = { id: d[e] }, s = t.grid || "view";
    i(P(s + "/{id}", m));
  }, a = () => {
    i("new");
  }, c = t.DataGridControls || g, l = t.disableRowClick ? () => {
  } : r;
  return /* @__PURE__ */ o("div", { className: "py-grid-container", children: /* @__PURE__ */ o(
    f,
    {
      title: t.title,
      columns: t.columns,
      getPluginOptions: t.getPluginOptions,
      defaultParams: t.defaultParams,
      DataGridControls: c,
      DataGridControlProps: { newRecord: a },
      endPoint: t.options.endPoint,
      endPointOptions: t.options.endPointOptions,
      onRowClick: l,
      pageSize: t.pageSize,
      ...t.options,
      ref: n,
      customizer: t.customizer,
      quickSearch: t.quickSearch
    }
  ) });
}
export {
  h as SummaryGrid
};
