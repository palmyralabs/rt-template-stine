import { jsx as t } from "react/jsx-runtime";
import { useContext as d } from "react";
import { StoreFactoryContext as a, PalmyraEditForm as f } from "@palmyralabs/rt-forms";
function F(o) {
  const r = o.storeFactory || d(a), e = o.id, { handleKeyPress: n, setValid: i, formRef: m } = o, c = o.FORMLET;
  return /* @__PURE__ */ t("form", { onKeyDown: n, children: /* @__PURE__ */ t(
    f,
    {
      onValidChange: i,
      ref: m,
      storeFactory: r,
      ...o.options,
      id: e,
      children: /* @__PURE__ */ t(c, {})
    }
  ) });
}
export {
  F as EditForm
};
