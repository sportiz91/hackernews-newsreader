import { useState } from "react";

export const Debounce = (func, wait, args) => {
  const [now, setNow] = useState(false);

  let timeout;
  let context = this;

  return () => {
    const later = (func, context) => {
      func.apply(context, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      later(func, context);
    }, wait);
    return;
  };
};
