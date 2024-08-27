import { jsxs as N, jsx as l } from "react/jsx-runtime";
import { useRef as f, useEffect as S } from "react";
import { A as s } from "../../../chunks/Layout.js";
import "dayjs";
import { PalmyraGrid as v } from "@palmyralabs/rt-forms-mui";
import { SummaryDialogForm as C } from "./SummaryDialogForm.js";
import { SummaryDrawerForm as G } from "./SummaryDrawerForm.js";
import { PopupGridControls as R } from "./PopupGridControls.js";
class y {
  subscribe(r, t) {
    const n = s.subscribe(r, t);
    if (n)
      return n;
    throw new Error("Not able to subscribe to topic " + r);
  }
  publish(r, t) {
    return s.publish(r, t);
  }
  unsubscribe(r) {
    s.unsubscribe(r);
  }
  unsubsribeTopic(r) {
    s.unsubscribe(r);
  }
  reset() {
    s.clearAllSubscriptions();
  }
}
const i = new y();
function q(e) {
  const r = e.pageName + "/viewPage", t = e.pageName + "/newPage", n = e.pageName + "/refresh", d = e.title, g = e.popup || "drawer", u = f(), c = e.gridRef || f(null);
  S(() => {
    var o = i.subscribe(r, (b, m) => {
      a(m);
    }), P = i.subscribe(n, (b) => {
      c.current && c.current.refresh();
    }), D = i.subscribe(t, (b, m) => {
      a(m);
    });
    return () => {
      i.unsubscribe(o), i.unsubscribe(D), i.unsubscribe(P);
    };
  }, []);
  const p = (o) => {
    a(o);
  }, a = (o) => {
    u.current && u.current.setData(o);
  }, w = e.DataGridControls || R, h = g == "drawer" ? G : C;
  return /* @__PURE__ */ N("div", { className: "py-grid-container", children: [
    /* @__PURE__ */ l(
      v,
      {
        title: d,
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
    ),
    /* @__PURE__ */ l(h, { ...e, gridRef: c, ref: u })
  ] });
}
export {
  q as SummaryPopupGrid
};
