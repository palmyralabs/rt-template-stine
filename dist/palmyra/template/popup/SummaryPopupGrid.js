import { jsxs as N, jsx as l } from "react/jsx-runtime";
import { useRef as f, useEffect as S } from "react";
import { A as n } from "../../../chunks/Layout.js";
import "dayjs";
import { PalmyraGrid as v } from "@palmyralabs/rt-forms-mui";
import { SummaryDialogForm as C } from "./SummaryDialogForm.js";
import { SummaryDrawerForm as G } from "./SummaryDrawerForm.js";
import { PopupGridControls as R } from "./PopupGridControls.js";
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
function j(e) {
  const r = e.pageName + "/viewPage", t = e.pageName + "/newPage", s = e.pageName + "/refresh", d = e.title, g = e.popup || "drawer", u = f(), c = e.gridRef || f(null);
  S(() => {
    var o = i.subscribe(r, (b, m) => {
      a(m);
    }), h = i.subscribe(s, (b) => {
      c.current && c.current.refresh();
    }), D = i.subscribe(t, (b, m) => {
      a(m);
    });
    return () => {
      i.unsubscribe(o), i.unsubscribe(D), i.unsubscribe(h);
    };
  }, []);
  const p = (o) => {
    a(o);
  }, a = (o) => {
    u.current && u.current.setData(o);
  }, P = e.DataGridControls || R, w = g == "drawer" ? G : C;
  return /* @__PURE__ */ N("div", { className: "py-grid-container", children: [
    /* @__PURE__ */ l(
      v,
      {
        title: d,
        columns: e.columns,
        DataGridControlProps: { setFormData: a },
        DataGridControls: P,
        onRowClick: p,
        endPoint: e.options.endPoint,
        endPointOptions: e.options.endPointOptions,
        pageSize: e.pageSize,
        ...e.options,
        getPluginOptions: e.getPluginOptions,
        ref: c,
        customizer: e.customizer,
        quickSearch: e.quickSearch
      }
    ),
    /* @__PURE__ */ l(w, { ...e, gridRef: c, ref: u })
  ] });
}
export {
  j as SummaryPopupGrid
};
