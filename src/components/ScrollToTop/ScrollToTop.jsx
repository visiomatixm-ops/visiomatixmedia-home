import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      const previousScrollRestoration = window.history.scrollRestoration;
      window.history.scrollRestoration = "manual";

      return () => {
        window.history.scrollRestoration = previousScrollRestoration;
      };
    }

    return undefined;
  }, []);

  useLayoutEffect(() => {
    const { pathname, search, hash } = location;

    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "auto" });
        return;
      }
    }

    const scrollToPageTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToPageTop();

    const frameId = window.requestAnimationFrame(scrollToPageTop);

    return () => window.cancelAnimationFrame(frameId);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

export default ScrollToTop;
