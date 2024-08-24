import { jsxs as N, jsx as l } from "react/jsx-runtime";
import { useRef as f, useEffect as S } from "react";
import { A as s, F as v } from "../../../chunks/Layout.js";
import "dayjs";
import "@mui/material";
import "../../../chunks/ExportDataButton.js";
import "@tanstack/react-table";
import { SummaryDialogForm as C } from "./SummaryDialogForm.js";
import { SummaryDrawerForm as F } from "./SummaryDrawerForm.js";
import { PopupGridControls as R } from "./PopupGridControls.js";
class G {
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
const i = new G();
function E(e) {
  const r = e.pageName + "/viewPage", t = e.pageName + "/newPage", n = e.pageName + "/refresh", g = e.title, p = e.popup || "drawer", a = f(), c = e.gridRef || f(null);
  S(() => {
    var o = i.subscribe(r, (b, m) => {
      u(m);
    }), P = i.subscribe(n, (b) => {
      c.current && c.current.refresh();
    }), D = i.subscribe(t, (b, m) => {
      u(m);
    });
    return () => {
      i.unsubscribe(o), i.unsubscribe(D), i.unsubscribe(P);
    };
  }, []);
  const d = (o) => {
    u(o);
  }, u = (o) => {
    a.current && a.current.setData(o);
  }, w = e.DataGridControls || R, h = p == "drawer" ? F : C;
  return /* @__PURE__ */ N("div", { className: "py-grid-container", children: [
    /* @__PURE__ */ l(
      v,
      {
        title: g,
        columns: e.columns,
        DataGridControlProps: { setFormData: u },
        DataGridControls: w,
        onRowClick: d,
        pageSize: e.pageSize,
        ...e.options,
        getPluginOptions: e.getPluginOptions,
        ref: c,
        customizer: e.customizer,
        quickSearch: e.quickSearch
      }
    ),
    /* @__PURE__ */ l(h, { ...e, gridRef: c, ref: a })
  ] });
}
export {
  E as SummaryPopupGrid
};
