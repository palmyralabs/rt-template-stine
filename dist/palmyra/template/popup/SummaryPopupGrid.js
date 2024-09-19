import { jsxs as N, jsx as b } from "react/jsx-runtime";
import { useRef as d, useEffect as S } from "react";
import { A as n } from "../../../chunks/Layout.js";
import "dayjs";
import { PalmyraGrid as v } from "@palmyralabs/rt-forms-mui";
import { SummaryDialogForm as R } from "./SummaryDialogForm.js";
import { SummaryDrawerForm as k } from "./SummaryDrawerForm.js";
import { PopupGridControls as G } from "./PopupGridControls.js";
class y {
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
const i = new y();
function q(e) {
  const r = e.pageName + "/viewPage", t = e.pageName + "/newPage", s = e.pageName + "/refresh", f = e.title, g = e.popup || "drawer", u = d(), a = e.gridRef || d(null);
  S(() => {
    var o = i.subscribe(r, (l, m) => {
      c(m);
    }), C = i.subscribe(s, (l) => {
      a.current && a.current.refresh();
    }), D = i.subscribe(t, (l, m) => {
      c(m);
    });
    return () => {
      i.unsubscribe(o), i.unsubscribe(D), i.unsubscribe(C);
    };
  }, []);
  const P = (o) => {
    c(o);
  }, c = (o) => {
    u.current && u.current.setData(o);
  }, w = e.DataGridControls || G, p = g == "drawer" ? k : R, h = e.disableRowClick ? () => {
  } : P;
  return /* @__PURE__ */ N("div", { className: "py-grid-container", children: [
    /* @__PURE__ */ b(
      v,
      {
        title: f,
        columns: e.columns,
        DataGridControlProps: { setFormData: c },
        DataGridControls: w,
        onRowClick: h,
        defaultParams: e.defaultParams,
        endPoint: e.options.endPoint,
        endPointOptions: e.options.endPointOptions,
        pageSize: e.pageSize,
        ...e.options,
        getPluginOptions: e.getPluginOptions,
        ref: a,
        customizer: e.customizer,
        quickSearch: e.quickSearch
      }
    ),
    /* @__PURE__ */ b(p, { ...e, gridRef: a, ref: u })
  ] });
}
export {
  q as SummaryPopupGrid
};
