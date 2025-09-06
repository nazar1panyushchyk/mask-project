import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollRestoration() {
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);
}

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  useScrollRestoration();

  return null;
}
