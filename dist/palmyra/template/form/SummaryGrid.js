import { jsx as n } from "react/jsx-runtime";
import { useRef as u } from "react";
import { PalmyraGrid as d } from "@palmyralabs/rt-forms-mui";
import { SummaryGridControls as s } from "./SummaryGridControls.js";
import { useNavigate as g } from "react-router-dom";
import "../../../chunks/Layout.js";
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
function C(t) {
  const e = g(), i = t.idKey || "id", r = t.gridRef || u(null), o = (a) => {
    const l = { id: a[i] }, m = t.grid || "view";
    e(f(m + "/{id}", l));
  }, c = () => {
    e("new");
  };
  return /* @__PURE__ */ n("div", { className: "py-grid-container", children: /* @__PURE__ */ n(
    d,
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
  ) });
}
export {
  C as SummaryGrid
};
