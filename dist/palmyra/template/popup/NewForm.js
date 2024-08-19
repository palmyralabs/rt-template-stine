import { jsx as o } from "react/jsx-runtime";
import { useContext as c } from "react";
import { StoreFactoryContext as l, PalmyraNewForm as f } from "@palmyralabs/rt-forms";
function F(t) {
  const e = t.storeFactory || c(l), { handleKeyPress: r, setValid: n, formRef: i } = t, a = t.initialData || {}, m = t.FORMLET;
  return /* @__PURE__ */ o("form", { onKeyDown: r, children: /* @__PURE__ */ o(
    f,
    {
      onValidChange: n,
      ref: i,
      storeFactory: e,
      ...t.options,
      initialData: a,
      children: /* @__PURE__ */ o(m, {})
    }
  ) });
}
export {
  F as NewForm
};
