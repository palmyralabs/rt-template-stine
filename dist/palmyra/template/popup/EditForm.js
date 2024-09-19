import { jsx as t } from "react/jsx-runtime";
import { useContext as c } from "react";
import { StoreFactoryContext as a, PalmyraEditForm as f } from "@palmyralabs/rt-forms";
function y(o) {
  const r = c(a), e = o.id, { handleKeyPress: n, setValid: i, formRef: m } = o, d = o.FORMLET;
  return /* @__PURE__ */ t("form", { onKeyDown: n, children: /* @__PURE__ */ t(
    f,
    {
      onValidChange: i,
      ref: m,
      storeFactory: r,
      ...o.options,
      id: e,
      children: /* @__PURE__ */ t(d, {})
    }
  ) });
}
export {
  y as EditForm
};
