import { jsx as n } from "react/jsx-runtime";
import { useRef as u } from "react";
import { PalmyraGrid as g } from "@palmyralabs/rt-forms-mui";
import { SummaryGridControls as f } from "./SummaryGridControls.js";
import { useNavigate as P } from "react-router-dom";
import { StringFormat as C } from "@palmyralabs/ts-utils";
import '../../../assets/Layout.css';/* empty css                     */
function v(i) {
  const t = P(), o = i.idKey || "id", e = i.gridRef || u(null), r = (m) => {
    const l = { id: m[o] }, s = i.grid || "view";
    t(C(s + "/{id}", l));
  }, a = () => {
    t("new");
  }, d = i.DataGridControls || f, c = i.disableRowClick ? () => {
  } : r;
  return /* @__PURE__ */ n("div", { className: "py-grid-container", children: /* @__PURE__ */ n(
    g,
    {
      title: i.title,
      columns: i.columns,
      getPluginOptions: i.getPluginOptions,
      defaultParams: i.defaultParams,
      DataGridControls: d,
      DataGridControlProps: { newRecord: a },
      endPoint: i.options.endPoint,
      endPointOptions: i.options.endPointOptions,
      onRowClick: c,
      pageSize: i.pageSize,
      ...i.options,
      ref: e,
      customizer: i.customizer,
      quickSearch: i.quickSearch
    }
  ) });
}
export {
  v as SummaryGrid
};
