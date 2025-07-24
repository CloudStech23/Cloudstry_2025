import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Specify the page(s) where scroll-to-top should NOT happen
    const excludedPaths = ["/industries-we-serve"]; // e.g. "/about" or "/project/details"

    if (excludedPaths.includes(pathname)) return;

    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
    }, 100); // Delay to allow animations to finish

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
