import { jsx as o } from "react/jsx-runtime";
import { useRef as s } from "react";
import { PalmyraGrid as u } from "@palmyralabs/rt-forms-mui";
import { SummaryGridControls as g } from "./SummaryGridControls.js";
import { useNavigate as f } from "react-router-dom";
import "../../../chunks/Layout.js";
import "dayjs";
const y = function(t, i) {
  return i ? typeof t == "string" && i instanceof Array ? t.replace(/({\d})/g, function(e) {
    let n = e.replace(/{/, "").replace(/}/, "");
    return i[n];
  }) : typeof t == "string" && i instanceof Object ? Object.keys(i).length === 0 ? t : t.replace(/({([^}]+)})/g, function(e) {
    let n = e.replace(/{/, "").replace(/}/, "");
    return i[n] ? i[n] : e;
  }) : t : t;
};
function k(t) {
  const i = f(), e = t.idKey || "id", n = t.gridRef || s(null), r = (l) => {
    const d = { id: l[e] }, m = t.grid || "view";
    i(y(m + "/{id}", d));
  }, c = () => {
    i("new");
  }, a = t.DataGridControls || g;
  return /* @__PURE__ */ o("div", { className: "py-grid-container", children: /* @__PURE__ */ o(
    u,
    {
      title: t.title,
      columns: t.columns,
      getPluginOptions: t.getPluginOptions,
      DataGridControls: a,
      DataGridControlProps: { newRecord: c },
      endPoint: t.options.endPoint,
      endPointOptions: t.options.endPointOptions,
      onRowClick: r,
      pageSize: t.pageSize,
      ...t.options,
      ref: n,
      customizer: t.customizer,
      quickSearch: t.quickSearch
    }
  ) });
}
export {
  k as SummaryGrid
};
