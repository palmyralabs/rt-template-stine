import { jsxs as v, Fragment as D, jsx as u } from "react/jsx-runtime";
import { useRef as d, useEffect as S } from "react";
import { A as n, F } from "../../../chunks/NoopConverter.js";
import "dayjs";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { SummaryDialogForm as C } from "./SummaryDialogForm.js";
import { SummaryDrawerForm as R } from "./SummaryDrawerForm.js";
import { PopupGridControls as y } from "./PopupGridControls.js";
class G {
  subscribe(r, t) {
    const s = n.subscribe(r, t);
    if (s)
      return s;
    throw new Error("Not able to subscribe to topic " + r);
  }
  publish(r, t) {
    return n.publish(r, t);
  }
  unsubscribe(r) {
    n.unsubscribe(r);
  }
  unsubsribeTopic(r) {
    n.unsubscribe(r);
  }
  reset() {
    n.clearAllSubscriptions();
  }
}
const i = new G();
function O(e) {
  const r = e.pageName + "/viewPage", t = e.pageName + "/newPage", s = e.pageName + "/refresh", f = e.title, g = e.popup || "drawer", m = d(), c = e.gridRef || d(null);
  S(() => {
    var o = i.subscribe(r, (b, l) => {
      a(l);
    }), P = i.subscribe(s, (b) => {
      c.current && c.current.refresh();
    }), N = i.subscribe(t, (b, l) => {
      a(l);
    });
    return () => {
      i.unsubscribe(o), i.unsubscribe(N), i.unsubscribe(P);
    };
  }, []);
  const p = (o) => {
    a(o);
  }, a = (o) => {
    m.current && m.current.setData(o);
  }, w = e.DataGridControls || y, h = g == "drawer" ? R : C;
  return /* @__PURE__ */ v(D, { children: [
    /* @__PURE__ */ u("div", { className: "grid-renderer-container", children: /* @__PURE__ */ u("div", { className: "palmyra-grid-container summary-drawer-grid", children: /* @__PURE__ */ u(
      F,
      {
        title: f,
        columns: e.columns,
        DataGridControlProps: { setFormData: a },
        DataGridControls: w,
        onRowClick: p,
        pageSize: e.pageSize,
        ...e.options,
        getPluginOptions: e.getPluginOptions,
        ref: c,
        customizer: e.customizer,
        quickSearch: e.quickSearch
      }
    ) }) }),
    /* @__PURE__ */ u(h, { ...e, gridRef: c, ref: m })
  ] });
}
export {
  O as SummaryPopupGrid
};
